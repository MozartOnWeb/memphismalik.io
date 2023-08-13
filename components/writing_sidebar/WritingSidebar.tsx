//import components
import BlogLink from "../blog_link/BlogLink";

//import icons
import { SubscribeIcon } from "@/public/assets/icons";

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

      <div className="blog_links_container">
        <BlogLink
          href="/writings/1"
          title="Design critique for fund and profit"
          date="February 19, 2023"
        />
        <BlogLink
          href="/"
          title="The Side Project Prophecy"
          date="January 17, 2022"
        />
        <BlogLink
          href="/"
          title="What I've learned so far about design advising and angel investing"
          date="July 18, 2021"
        />
        <BlogLink
          href="/"
          title="Make a personal changelog"
          date="April 29, 2021"
        />
        <BlogLink
          href="/"
          title="My playbook for shipping side projects"
          date="January 30, 2021"
        />
        <BlogLink
          href="/"
          title="Design critique for fund and profit"
          date="February 19, 2023"
        />
        <BlogLink
          href="/"
          title="The Side Project Prophecy"
          date="January 17, 2022"
        />
        <BlogLink
          href="/"
          title="What I've learned so far about design advising and angel investing"
          date="July 18, 2021"
        />
        <BlogLink
          href="/"
          title="Make a personal changelog"
          date="April 29, 2021"
        />
        <BlogLink
          href="/"
          title="My playbook for shipping side projects"
          date="January 30, 2021"
        />
        <BlogLink
          href="/"
          title="Design critique for fund and profit"
          date="February 19, 2023"
        />
        <BlogLink
          href="/"
          title="The Side Project Prophecy"
          date="January 17, 2022"
        />
        <BlogLink
          href="/"
          title="What I've learned so far about design advising and angel investing"
          date="July 18, 2021"
        />
        <BlogLink
          href="/"
          title="Make a personal changelog"
          date="April 29, 2021"
        />
        <BlogLink
          href="/"
          title="My playbook for shipping side projects"
          date="January 30, 2021"
        />
      </div>
    </div>
  );
}
