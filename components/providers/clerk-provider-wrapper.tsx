"use client";

import { useEffect, useState, useRef } from "react";

export default function ClerkProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ClerkProvider, setClerkProvider] = useState<any>(null);
  const [publishableKey, setPublishableKey] = useState<string | null>(null);
  const [localization, setLocalization] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const initializedRef = useRef(false);

  useEffect(() => {
    // 이미 초기화되었으면 중복 실행 방지
    if (initializedRef.current) {
      return;
    }

    let isMounted = true;

    try {
      // Vercel 배포 시에도 작동하도록 여러 경로 확인
      const windowKey =
        typeof window !== "undefined"
          ? (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
          : null;

      // 빌드 타임에 주입된 환경 변수 (클라이언트에서 접근 가능)
      // Next.js는 NEXT_PUBLIC_ 접두사가 있는 환경 변수를 빌드 타임에 클라이언트 번들에 주입
      const processKey =
        typeof process !== "undefined" && process.env
          ? process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
          : null;

      // 런타임 환경 변수 (서버 사이드에서만 접근 가능)
      // 클라이언트에서는 빌드 타임에 주입된 값만 사용 가능
      const key = windowKey || processKey;

      // 디버깅 정보
      if (process.env.NODE_ENV === "development") {
        console.log("[ClerkProviderWrapper] Environment variable check:", {
          windowKey: windowKey ? `${windowKey.substring(0, 20)}...` : "not found",
          processKey: processKey ? `${processKey.substring(0, 20)}...` : "not found",
          finalKey: key ? `${key.substring(0, 20)}...` : "not found",
          windowData: typeof window !== "undefined" ? (window as any).__NEXT_DATA__?.env : "N/A",
        });
      }

      // 환경 변수 유효성 검사 (placeholder 값 제외)
      // pk_test_ 또는 pk_live_로 시작하는 키만 유효
      const isValidKey =
        !!key &&
        key !== "pk_test_build_placeholder_key_for_ci_cd" &&
        key !== "your-clerk-publishable-key" &&
        !key.includes("your-clerk") &&
        (key.startsWith("pk_test_") || key.startsWith("pk_live_"));

      if (!isValidKey) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            "[ClerkProviderWrapper] Invalid or missing Clerk key. ClerkProvider will not be initialized.",
            {
              hasKey: !!key,
              keyPrefix: key?.substring(0, 30) || "none",
              keyValue: key || "undefined",
              isValid: isValidKey,
              message: "Please set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in .env.local with a valid pk_test_ or pk_live_ key",
            }
          );
        }
        initializedRef.current = true;
        if (isMounted) {
          setIsLoading(false);
        }
        return;
      }

      initializedRef.current = true;

      if (isMounted) {
        setPublishableKey(key);
      }

      // Clerk와 localization을 동시에 로드
      Promise.all([
        import("@clerk/nextjs").catch(() => null),
        import("@clerk/localizations").catch(() => null),
      ])
        .then(([clerk, locales]) => {
          if (!isMounted) return;

          if (clerk && clerk.ClerkProvider) {
            setClerkProvider(() => clerk.ClerkProvider);
            if (locales && locales.koKR) {
              setLocalization(locales.koKR);
            }
            if (process.env.NODE_ENV === "development") {
              console.log(
                "[ClerkProviderWrapper] Clerk Provider loaded successfully"
              );
            }
          } else {
            if (process.env.NODE_ENV === "development") {
              console.warn("[ClerkProviderWrapper] Clerk Provider not found");
            }
          }
        })
        .catch((error) => {
          if (!isMounted) return;
          console.error("[ClerkProviderWrapper] Clerk load failed:", error);
        })
        .finally(() => {
          if (isMounted) {
            setIsLoading(false);
          }
        });
    } catch (error) {
      if (!isMounted) return;
      console.error("[ClerkProviderWrapper] Error:", error);
      initializedRef.current = true;
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // 로딩 중이거나 Clerk가 없으면 그냥 children 반환
  if (isLoading || !ClerkProvider || !publishableKey) {
    return <>{children}</>;
  }

  try {
    return (
      <div data-clerk-provider="true">
        <ClerkProvider
          publishableKey={publishableKey}
          localization={localization || undefined}
        >
          {children}
        </ClerkProvider>
      </div>
    );
  } catch (error) {
    console.warn("ClerkProvider render error:", error);
    return <>{children}</>;
  }
}

