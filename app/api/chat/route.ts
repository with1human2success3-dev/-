import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Clerk 인증 확인
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "인증되지 않음" },
        { status: 401 }
      );
    }

    // 요청 본문 파싱
    const body = await req.json();

    // userId와 요청의 userId 비교 (필요한 경우)
    if (body.userId && userId !== body.userId) {
      return NextResponse.json(
        { error: "인증되지 않음" },
        { status: 401 }
      );
    }

    // 채팅 로직 처리
    // TODO: 실제 채팅 로직 구현

    return NextResponse.json({
      success: true,
      message: "Chat processed",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

