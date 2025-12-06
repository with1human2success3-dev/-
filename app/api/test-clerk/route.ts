import { NextResponse } from "next/server";

export async function GET() {
  try {
    const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    const secretKey = process.env.CLERK_SECRET_KEY;

    // 환경 변수 확인
    const hasPublishableKey = !!publishableKey && publishableKey.startsWith("pk_");
    const hasSecretKey = !!secretKey && secretKey.startsWith("sk_");

    // Clerk 모듈 로드 시도
    let clerkLoaded = false;
    let clerkError = null;

    try {
      const clerk = await import("@clerk/nextjs/server");
      if (clerk && clerk.auth) {
        clerkLoaded = true;
      }
    } catch (error: any) {
      clerkError = error.message;
    }

    // Clerk API 호출 테스트 (Secret Key가 있는 경우)
    let apiTestResult = null;
    if (hasSecretKey && clerkLoaded) {
      try {
        const { clerkClient } = await import("@clerk/nextjs/server");
        // 간단한 API 호출 테스트
        const client = clerkClient();
        // 실제 API 호출 없이 클라이언트 생성만 확인
        apiTestResult = {
          success: true,
          message: "Clerk client initialized successfully",
        };
      } catch (error: any) {
        apiTestResult = {
          success: false,
          message: error.message,
        };
      }
    }

    return NextResponse.json(
      {
        status: "ok",
        environment: {
          publishableKey: {
            exists: hasPublishableKey,
            prefix: publishableKey?.substring(0, 10) + "...",
            valid: hasPublishableKey && publishableKey !== "pk_test_build_placeholder_key_for_ci_cd",
          },
          secretKey: {
            exists: hasSecretKey,
            prefix: secretKey?.substring(0, 10) + "...",
          },
        },
        clerk: {
          loaded: clerkLoaded,
          error: clerkError,
          apiTest: apiTestResult,
        },
        message: hasPublishableKey && hasSecretKey && clerkLoaded
          ? "✅ 모든 설정이 정상입니다!"
          : "⚠️ 일부 설정이 누락되었습니다.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

