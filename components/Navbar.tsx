"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, User } from "lucide-react";

const Navbar = () => {
  const [ClerkComponents, setClerkComponents] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasClerkProvider, setHasClerkProvider] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let checkInterval: NodeJS.Timeout | null = null;

    const checkClerkProvider = () => {
      // ClerkProvider가 DOM에 있는지 확인
      const hasProvider = document.querySelector('[data-clerk-provider]') !== null;
      
      if (hasProvider && isMounted) {
        setHasClerkProvider(true);
        
        // Clerk 컴포넌트 로드
        import("@clerk/nextjs")
          .then((clerk) => {
            if (!isMounted) return;

            if (clerk && clerk.SignedOut && clerk.SignInButton) {
              setClerkComponents({
                SignedOut: clerk.SignedOut,
                SignInButton: clerk.SignInButton,
                SignedIn: clerk.SignedIn,
                UserButton: clerk.UserButton,
              });

              if (process.env.NODE_ENV === "development") {
                console.log("[Navbar] Clerk components loaded successfully");
              }
            } else {
              console.error("[Navbar] Clerk components not found");
            }
          })
          .catch((error) => {
            if (!isMounted) return;
            console.error("[Navbar] Failed to load Clerk components:", error);
          })
          .finally(() => {
            if (isMounted) {
              setIsLoading(false);
            }
          });

        if (checkInterval) {
          clearInterval(checkInterval);
        }
        return true;
      }

      return false;
    };

    // 즉시 한 번 확인
    if (!checkClerkProvider()) {
      // ClerkProvider가 아직 없으면 주기적으로 확인 (최대 5초)
      let attempts = 0;
      checkInterval = setInterval(() => {
        attempts++;
        if (checkClerkProvider() || attempts >= 10) {
          if (checkInterval) {
            clearInterval(checkInterval);
          }
          if (isMounted && attempts >= 10) {
            setIsLoading(false);
          }
        }
      }, 500);
    }

    return () => {
      isMounted = false;
      if (checkInterval) {
        clearInterval(checkInterval);
      }
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* 상단 네비게이션 */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* 좌측 메뉴 */}
          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6 text-black" />
          </button>

          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-serif tracking-tight text-black">
              WINE
            </span>
          </Link>

                {/* 중앙 메뉴 (데스크톱) */}
                <nav className="hidden lg:flex items-center gap-8">
                  {["Red", "White", "Sparkling", "Rosé", "Collection"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-sm font-light tracking-[0.2em] text-black hover:text-gray-600 transition-colors uppercase"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>

                {/* 우측 메뉴 */}
                <div className="flex items-center gap-6">
                  <button className="p-2 hover:opacity-70 transition-opacity">
                    <Search className="w-5 h-5 text-black" />
                  </button>
                  {!isLoading && hasClerkProvider && ClerkComponents ? (
                    <>
                      <ClerkComponents.SignedOut>
                        <ClerkComponents.SignInButton mode="modal">
                          <button className="p-2 hover:opacity-70 transition-opacity" title="로그인">
                            <User className="w-5 h-5 text-black" />
                          </button>
                        </ClerkComponents.SignInButton>
                      </ClerkComponents.SignedOut>
                      <ClerkComponents.SignedIn>
                        <div className="flex items-center gap-4">
                          <button className="p-2 hover:opacity-70 transition-opacity">
                            <ShoppingBag className="w-5 h-5 text-black" />
                          </button>
                          <ClerkComponents.UserButton />
                        </div>
                      </ClerkComponents.SignedIn>
                    </>
                  ) : (
                    <button
                      className="p-2 hover:opacity-70 transition-opacity"
                      title={hasClerkProvider ? "로그인 (로딩 중...)" : "로그인 (환경 변수 설정 필요)"}
                      disabled={isLoading}
                      onClick={() => {
                        if (!hasClerkProvider) {
                          alert(
                            "Clerk 환경 변수가 설정되지 않았습니다.\n\n" +
                            "로그인 기능을 사용하려면:\n" +
                            "1. .env.local 파일을 열어주세요\n" +
                            "2. NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY와 CLERK_SECRET_KEY를 추가하세요\n" +
                            "3. Clerk Dashboard (https://dashboard.clerk.com)에서 API 키를 확인하세요\n" +
                            "4. 개발 서버를 재시작하세요"
                          );
                        }
                      }}
                    >
                      <User className="w-5 h-5 text-black opacity-50" />
                    </button>
                  )}
                </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
