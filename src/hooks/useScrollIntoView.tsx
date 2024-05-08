"use client"

import { useSearchParams } from "next/navigation";
import { RefObject, useEffect } from "react";

export default function useScrollIntoView({ ref }: { ref: RefObject<HTMLDivElement> }) {
          const searchparams = useSearchParams();

          useEffect(() => {
                    if (searchparams.toString() !== "") {
                              typeof window !== "undefined" && window.innerWidth > 768 && ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
          }, [searchparams, ref]);
};

export function ScrollIntoView({ ref }: { ref: RefObject<HTMLDivElement> }) {
          useScrollIntoView({ ref });

          return null;
};