import { Suspense } from "react";

import Loading from "@/components/loading/Loading";
import AmaContent from "@/components/suspense/ama/AmaContent";

export default async function Ama({
  params: { ama },
}: {
  params: { ama: string };
}) {
  return (
    <main className="ama-page">
      <Suspense fallback={<Loading marginTop={35} />}>
        <AmaContent ama={ama} />
      </Suspense>
    </main>
  );
}
