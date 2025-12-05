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
  title: "LUXURY - Premium Shopping",
  description: "Timeless elegance meets modern sophistication",
};

// 동적 렌더링 강제 (빌드 시 환경 변수 없이도 빌드 가능)
export const dynamic = "force-dynamic";

// ClerkProvider 래퍼 컴포넌트
function ClerkProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // 환경 변수가 없으면 ClerkProvider 없이 렌더링
  if (!publishableKey || publishableKey === "pk_test_build_placeholder_key_for_ci_cd") {
    return <>{children}</>;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} localization={koKR}>
      {children}
    </ClerkProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProviderWrapper>
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
    </ClerkProviderWrapper>
  );
}
