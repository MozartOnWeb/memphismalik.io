//import icons
import { PlusIcon } from "@/public/assets/icons";

export default async function AmaSidebar() {
  return (
    <div className="ama_sidebar">
      <div className="headline">
        <h2>Ask me anything</h2>
        <button className="add">
          <PlusIcon />
        </button>
      </div>

      <div className="ama_links_container"></div>
    </div>
  );
}
