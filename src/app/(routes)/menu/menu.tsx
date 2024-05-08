"use client";

import LargeMenu from "../(shared)/(menu)/large-menu";
import SmallMenu from "../(shared)/(menu)/small-menu";

export default function Menu() {
  return (
    <>
      <div className="p-5 hidden">
        <LargeMenu />
      </div>

      <div className="p-5">
        <SmallMenu />
      </div>
    </>
  );
}
