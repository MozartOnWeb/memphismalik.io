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
          href="1"
          question="Are you considering building a Design course or book?"
          author="Memphis Malik"
        />
        <AmaLink
          href="2"
          question="What do you use as a backend for your site? Is it NextJS API routes or a custom server seperate from frontend?"
          author="Henry Gonzalez"
        />
        <AmaLink
          href="3"
          question="What is your favorite book?"
          author="John Doe"
        />
      </div>
    </div>
  );
}
