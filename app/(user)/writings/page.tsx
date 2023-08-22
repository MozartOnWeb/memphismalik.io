import Image from "next/image";

import Cubes from "@/public/assets/Cubes.png";

export default async function Writings() {
  return (
    <main className="writings-page">
      <Image
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
        }}
        src={Cubes}
        alt="background"
      />
    </main>
  );
}
