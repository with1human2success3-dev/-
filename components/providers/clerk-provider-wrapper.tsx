"use client";

import { useEffect, useState } from "react";

export default function ClerkProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ClerkProvider, setClerkProvider] = useState<any>(null);
  const [publishableKey, setPublishableKey] = useState<string | null>(null);
  const [localization, setLocalization] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const key =
        typeof window !== "undefined"
          ? (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
          : null;

      if (!key || key === "pk_test_build_placeholder_key_for_ci_cd" || !key.startsWith("pk_")) {
        setIsLoading(false);
        return;
      }

      setPublishableKey(key);
      
      // Clerk와 localization을 동시에 로드
      Promise.all([
        import("@clerk/nextjs").catch(() => null),
        import("@clerk/localizations").catch(() => null),
      ])
        .then(([clerk, locales]) => {
          if (clerk && clerk.ClerkProvider) {
            setClerkProvider(() => clerk.ClerkProvider);
            if (locales && locales.koKR) {
              setLocalization(locales.koKR);
            }
          }
        })
        .catch((error) => {
          // Clerk 로드 실패 시 무시
          console.warn("Clerk load failed:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.warn("ClerkProviderWrapper error:", error);
      setIsLoading(false);
    }
  }, []);

  // 로딩 중이거나 Clerk가 없으면 그냥 children 반환
  if (isLoading || !ClerkProvider || !publishableKey) {
    return <>{children}</>;
  }

  try {
    return (
      <ClerkProvider
        publishableKey={publishableKey}
        localization={localization || undefined}
      >
        {children}
      </ClerkProvider>
    );
  } catch (error) {
    console.warn("ClerkProvider render error:", error);
    return <>{children}</>;
  }
}

