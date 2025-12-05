"use client";

import { useEffect, useRef } from "react";

/**
 * Clerk 사용자를 Supabase DB에 자동으로 동기화하는 프로바이더
 *
 * RootLayout에 추가하여 로그인한 모든 사용자를 자동으로 Supabase에 동기화합니다.
 */
export function SyncUserProvider({ children }: { children: React.ReactNode }) {
  const syncedRef = useRef(false);

  useEffect(() => {
    // Clerk 환경 변수 확인
    const hasClerkKey = !!(
      typeof window !== "undefined" &&
      (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
      (window as any).__NEXT_DATA__.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !==
        "pk_test_build_placeholder_key_for_ci_cd" &&
      (window as any).__NEXT_DATA__.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_")
    );

    if (!hasClerkKey || syncedRef.current) {
      return;
    }

    // API를 통해 동기화 (API에서 인증 확인)
    const syncUser = async () => {
      try {
        const response = await fetch("/api/sync-user", {
          method: "POST",
        });

        if (response.ok) {
          syncedRef.current = true;
        }
        // 401은 정상 (로그인 안 함) - 에러로 처리하지 않음
      } catch {
        // 네트워크 에러 등은 무시
      }
    };

    syncUser();
  }, []);

  return <>{children}</>;
}
