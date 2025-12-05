"use client";

import { useSyncUser } from "@/hooks/use-sync-user";

/**
 * Clerk 사용자를 Supabase DB에 자동으로 동기화하는 프로바이더
 *
 * RootLayout에 추가하여 로그인한 모든 사용자를 자동으로 Supabase에 동기화합니다.
 */
export function SyncUserProvider({ children }: { children: React.ReactNode }) {
  // Hook은 항상 호출해야 함 (조건부 호출 불가)
  // useSyncUser 내부에서 환경 변수를 체크하도록 처리
  useSyncUser();

  return <>{children}</>;
}
