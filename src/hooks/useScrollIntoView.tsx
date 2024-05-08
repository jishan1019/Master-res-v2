"use client"

import { RefObject, useEffect } from "react";

export default function useScrollIntoView({ ref, searchparams }: { ref: RefObject<HTMLDivElement>, searchparams: URLSearchParams }) {
          useEffect(() => {
                    if (searchparams.toString() !== "") {
                              typeof window !== "undefined" && window.innerWidth > 768 && ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
          }, [searchparams, ref]);
};