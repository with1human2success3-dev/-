import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { SyncUserProvider } from "@/components/providers/sync-user-provider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
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

// ClerkProvider를 동적으로 로드 (SSR 비활성화)
const ClerkProviderWrapper = dynamic(
  () => import("@/components/providers/clerk-provider-wrapper"),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <ClerkProviderWrapper>
            <SyncUserProvider>
              <Navbar />
              {children}
            </SyncUserProvider>
          </ClerkProviderWrapper>
        </ErrorBoundary>
      </body>
    </html>
  );
}
