"use client";

import LargeMenu from "../(shared)/(menu)/large-menu";
import SmallMenu from "../(shared)/(menu)/small-menu";

export default function Menu() {
  return (
    <>
      <div className="p-5 hidden sm:block">
        <LargeMenu />
      </div>

      <div className="p-5 sm:hidden">
        <SmallMenu />
      </div>
    </>
  );
}
