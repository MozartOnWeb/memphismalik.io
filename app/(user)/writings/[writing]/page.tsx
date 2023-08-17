import { Suspense } from "react";

import WritingContent from "@/components/suspense/WritingContent";
import Loading from "@/components/loading/Loading";

export default async function Writing({
  params: { writing },
}: {
  params: { writing: string };
}) {
  return (
    <main className="writing-page">
      <Suspense fallback={<Loading marginTop={35} />}>
        <WritingContent writing={writing} />
      </Suspense>
    </main>
  );
}
