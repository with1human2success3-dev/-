"use client";

import { useEffect, useRef } from "react";

/**
 * Clerk 사용자를 Supabase DB에 자동으로 동기화하는 훅
 *
 * 사용자가 로그인한 상태에서 이 훅을 사용하면
 * 자동으로 /api/sync-user를 호출하여 Supabase users 테이블에 사용자 정보를 저장합니다.
 *
 * @example
 * ```tsx
 * 'use client';
 *
 * import { useSyncUser } from '@/hooks/use-sync-user';
 *
 * export default function Layout({ children }) {
 *   useSyncUser();
 *   return <>{children}</>;
 * }
 * ```
 */
export function useSyncUser() {
  const syncedRef = useRef(false);

  // Clerk 환경 변수 확인
  const hasClerkKey = !!(
    typeof window !== "undefined" &&
    (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    (window as any).__NEXT_DATA__.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== "pk_test_build_placeholder_key_for_ci_cd"
  );

  useEffect(() => {
    // Clerk가 없으면 동기화하지 않음
    if (!hasClerkKey) {
      return;
    }

    // Clerk useAuth를 동적으로 import
    let isLoaded = false;
    let userId: string | null = null;

    try {
      // 동적 import로 Clerk 사용
      import("@clerk/nextjs").then((clerk) => {
        // useAuth는 Hook이므로 여기서 직접 호출할 수 없음
        // 대신 API를 통해 확인하거나, 다른 방식 사용
      });
    } catch (error) {
      // Clerk가 없으면 무시
      return;
    }

    // 이미 동기화한 경우 무시
    if (syncedRef.current) {
      return;
    }

    // 동기화 실행 (API에서 인증 확인)
    const syncUser = async () => {
      try {
        const response = await fetch("/api/sync-user", {
          method: "POST",
        });

        if (!response.ok) {
          // 401은 인증되지 않은 것이므로 정상 (로그인 안 함)
          if (response.status === 401) {
            return;
          }
          console.error("Failed to sync user:", await response.text());
          return;
        }

        syncedRef.current = true;
      } catch (error) {
        // 네트워크 에러 등은 무시
        console.error("Error syncing user:", error);
      }
    };

    syncUser();
  }, [hasClerkKey]);
}
