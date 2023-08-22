"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

//import components
import { WritingLinks } from "@/components/suspense/WritingLinks";

//import assets
import Cubes from "@/public/assets/Cubes.png";
import { SubscribeIcon } from "@/public/assets/icons";
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";

export default async function Writings() {
  const pathname = usePathname();
  return (
    <main className="writings-page">
      <Image
        className="writings-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -1,
          opacity: 0.5,
          pointerEvents: "none",
        }}
        src={Cubes}
        alt="background"
      />
      {pathname === "/writings" ? (
        <div className="links">
          <div className="headline">
            <h2>Writings</h2>
            <button className="subscribe">
              <SubscribeIcon />
              Subscribe
            </button>
          </div>

          <Suspense fallback={<Loading marginTop={20} />}>
            <WritingLinks />
          </Suspense>
        </div>
      ) : null}
    </main>
  );
}
