import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { SyncUserProvider } from "@/components/providers/sync-user-provider";
import ErrorBoundaryWrapper from "@/components/ErrorBoundaryWrapper";
import ClerkProviderWrapper from "@/components/providers/clerk-provider-wrapper";
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
        <ErrorBoundaryWrapper>
          <ClerkProviderWrapper>
            <SyncUserProvider>
              <Navbar />
              {children}
            </SyncUserProvider>
          </ClerkProviderWrapper>
        </ErrorBoundaryWrapper>
      </body>
    </html>
  );
}
