import { useCallback, useEffect } from "react";

import React from "react";

interface UseClickOutProps {
  ref: React.RefObject<HTMLDivElement>;
  handler: () => void;
}
export const useClickOut = ({ ref, handler }: UseClickOutProps) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (
        ref.current &&
        e.target instanceof Node &&
        !ref.current.contains(e.target)
      ) {
        handler();
      }
    },
    [handler, ref]
  );
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
};
