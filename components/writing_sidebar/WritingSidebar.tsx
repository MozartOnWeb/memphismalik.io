"use client";

import { Suspense } from "react";

//import icons
import { SubscribeIcon } from "@/public/assets/icons";
import { WritingLinks } from "../suspense/WritingLinks";

export default function WritingSidebar() {
  return (
    <div className="writing_sidebar">
      <div className="headline">
        <h2>Writings</h2>
        <button className="subscribe">
          <SubscribeIcon />
          Subscribe
        </button>
      </div>
      <Suspense>
        <WritingLinks />
      </Suspense>
    </div>
  );
}
