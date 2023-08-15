//import icons
import { PlusIcon } from "@/public/assets/icons";
import AmaLink from "../ama_link/AmaLink";

export default async function AmaSidebar() {
  return (
    <div className="ama_sidebar">
      <div className="headline">
        <h2>Ask me anything</h2>
        <button className="add">
          <PlusIcon />
        </button>
      </div>

      <div className="ama_links_container">
        <AmaLink
          href="/ama"
          question="Are you considering building a Design course or book?"
          author="Memphis Malik"
        />
      </div>
    </div>
  );
}
