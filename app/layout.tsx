import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { koKR } from "@clerk/localizations";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import { SyncUserProvider } from "@/components/providers/sync-user-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS 템플릿",
  description: "Next.js + Clerk + Supabase 보일러플레이트",
};

// 동적 렌더링 강제 (빌드 시 환경 변수 없이도 빌드 가능)
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // 빌드 시 환경 변수가 없을 경우를 대비
  // 실제 런타임에서는 환경 변수가 필요함
  // 빌드 시에는 더미 키를 사용하여 빌드가 성공하도록 함
  // 주의: 실제 프로덕션 배포 시에는 반드시 유효한 키를 설정해야 함
  const clerkPublishableKey =
    publishableKey || "pk_test_build_placeholder_key_for_ci_cd";

  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      localization={koKR}
    >
      <html lang="ko">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SyncUserProvider>
            <Navbar />
            {children}
          </SyncUserProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
