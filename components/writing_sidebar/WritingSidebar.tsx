import { Suspense } from "react";

//import icons
import { SubscribeIcon } from "@/public/assets/icons";
import { WritingLinks } from "../suspense/WritingLinks";

//import components
import Loading from "../loading/Loading";

export default async function WritingSidebar() {
  return (
    <div className="writing_sidebar">
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
  );
}
