"use client";

import { useEffect, useRef } from "react";

/**
 * Clerk 사용자를 Supabase DB에 자동으로 동기화하는 프로바이더
 *
 * RootLayout에 추가하여 로그인한 모든 사용자를 자동으로 Supabase에 동기화합니다.
 */
export function SyncUserProvider({ children }: { children: React.ReactNode }) {
  const syncedRef = useRef(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    // 이미 동기화되었으면 중복 실행 방지
    if (syncedRef.current) {
      return;
    }

    // Clerk 환경 변수 확인
    const windowKey =
      typeof window !== "undefined"
        ? (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
        : null;

    const processKey =
      typeof process !== "undefined"
        ? process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
        : null;

    const key = windowKey || processKey;

    const hasClerkKey =
      !!key &&
      key !== "pk_test_build_placeholder_key_for_ci_cd" &&
      key !== "your-clerk-publishable-key" &&
      key.startsWith("pk_");

    if (!hasClerkKey) {
      return;
    }

    // API를 통해 동기화 (API에서 인증 확인)
    const syncUser = async () => {
      if (!isMountedRef.current || syncedRef.current) {
        return;
      }

      try {
        const response = await fetch("/api/sync-user", {
          method: "POST",
        });

        if (response.ok && isMountedRef.current) {
          syncedRef.current = true;
        }
        // 401은 정상 (로그인 안 함) - 에러로 처리하지 않음
      } catch {
        // 네트워크 에러 등은 무시
      }
    };

    // 약간의 지연 후 동기화 (ClerkProvider 초기화 대기)
    const timeoutId = setTimeout(() => {
      syncUser();
    }, 1000);

    return () => {
      isMountedRef.current = false;
      clearTimeout(timeoutId);
    };
  }, []);

  return <>{children}</>;
}
