// hooks/usePageLoading.ts
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLoading } from "@/Util/LoadingContext";

export function usePageLoading() {
  const pathname = usePathname();
  const { setLoading } = useLoading();
  const timeoutRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const MIN_SHOW_MS = 200; // avoid flicker for very short navigations

  useEffect(() => {
    // When pathname changes, treat this as navigation end.
    const startedAt = startRef.current;
    const elapsed = startedAt ? performance.now() - startedAt : MIN_SHOW_MS;
    const remaining = Math.max(0, MIN_SHOW_MS - elapsed);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setLoading(false);
      timeoutRef.current = null;
    }, remaining);
    startRef.current = null;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [pathname, setLoading]);

  useEffect(() => {
    // Detect user navigation starts: clicks on internal links and popstate (back/forward)
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest ? (target.closest("a") as HTMLAnchorElement | null) : null;
      if (!anchor || !anchor.href) return;
      try {
        const url = new URL(anchor.href, location.href);
        if (url.origin === location.origin) {
          // internal navigation
          startRef.current = performance.now();
          setLoading(true);
        }
      } catch {
        // ignore invalid URLs
      }
    }

    function onPopState() {
      startRef.current = performance.now();
      setLoading(true);
    }

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
    };
  }, [setLoading]);
}