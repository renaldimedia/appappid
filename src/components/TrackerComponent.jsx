// ComponentShow.jsx
import { useEffect, useRef } from "react";
import Clarity from '@microsoft/clarity';

Clarity.init(import.meta.env.APPAPPID_CLARITY);
/**
 * Props:
 * - once (default true): jika true, log hanya sekali lalu unobserve.
 * - rootMargin, threshold: diteruskan ke IntersectionObserver.
 */
export default function ComponentShow({
  children,
  once = true,
  rootMargin = "0px",
  threshold = 0.1,
  eventName = ""
}) {
  const elRef = useRef(null);
  const seenRef = useRef(false);

  useEffect(() => {
    const node = elRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!seenRef.current) {
              console.log("component show");
              if(eventName != ""){
                Clarity.event(eventName)
              }
              seenRef.current = true;
            }
            if (once) observer.unobserve(node);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return <div ref={elRef}>{children}</div>;
}
