"use client";

import LargeMenu from "../(shared)/(menu)/large-menu";
import SmallMenu from "../(shared)/(menu)/small-menu";

export default function Menu() {
  return (
    <div className="p-5">
      <LargeMenu />

      <SmallMenu />
    </div>
  );
}
