import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Clerk 환경 변수 확인
    const hasClerkKey = !!(
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== "pk_test_build_placeholder_key_for_ci_cd" &&
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_") &&
      process.env.CLERK_SECRET_KEY
    );

    if (!hasClerkKey) {
      return NextResponse.json({ user: null, hasClerk: false });
    }

    // Clerk auth를 동적으로 import
    const { auth } = await import("@clerk/nextjs/server");
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ user: null, hasClerk: true });
    }

    // 사용자 정보 가져오기
    const { clerkClient } = await import("@clerk/nextjs/server");
    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    return NextResponse.json({
      user: {
        id: user.id,
        emailAddresses: user.emailAddresses,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
      },
      hasClerk: true,
    });
  } catch (error) {
    console.error("User info error:", error);
    return NextResponse.json({ user: null, hasClerk: false });
  }
}

