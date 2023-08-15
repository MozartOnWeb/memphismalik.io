//import components
import BlogLink from "../blog_link/BlogLink";

//import fetch writings
import { fetchWritings } from "@/sanity/fetch";

//import icons
import { SubscribeIcon } from "@/public/assets/icons";

//import helpers function
import { formatDate } from "@/lib/helpers";

//define types
type WritingsProps = {
  title: string;
  slug: string;
  publishedAt: string;
};

export default async function WritingSidebar() {
  const writings: WritingsProps[] = await fetchWritings();

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
        {writings.map(({ title, slug, publishedAt }) => (
          <BlogLink
            key={slug}
            href={slug}
            title={title}
            date={formatDate(publishedAt)}
          />
        ))}
      </div>
    </div>
  );
}
