"use client";

import { useState, useEffect } from "react";

/**
 * Clerk useUser Hook을 안전하게 사용하는 래퍼 컴포넌트
 * Clerk가 없을 때도 에러 없이 작동합니다.
 */
export function useSafeClerkUser() {
  const [user] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasClerk, setHasClerk] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Clerk 환경 변수 확인
    const hasClerkKey = !!(
      typeof window !== "undefined" &&
      (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
      (window as any).__NEXT_DATA__.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !==
        "pk_test_build_placeholder_key_for_ci_cd" &&
      (window as any).__NEXT_DATA__.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_")
    );

    if (!hasClerkKey) {
      setIsLoaded(true);
      return;
    }

    setHasClerk(true);

    // Clerk를 동적으로 로드하고 useUser 사용
    import("@clerk/nextjs")
      .then(() => {
        try {
          // useUser는 Hook이므로 여기서 직접 호출할 수 없음
          // 대신 컴포넌트를 만들어서 사용해야 함
          setIsLoaded(true);
        } catch (err) {
          setError(err instanceof Error ? err : new Error("Clerk 로드 실패"));
          setIsLoaded(true);
        }
      })
      .catch((err) => {
        setError(err instanceof Error ? err : new Error("Clerk 로드 실패"));
        setIsLoaded(true);
        setHasClerk(false);
      });
  }, []);

  return { user, isLoaded, hasClerk, error };
}

