//import components
import BlogLink from "../../blog_link/BlogLink";

//import helpers function
import { formatDate } from "@/lib/helpers";

//import fetch writings
import { fetchWritings } from "@/sanity/fetch";

//define types
type WritingsProps = {
  title: string;
  slug: string;
  publishedAt: string;
};

export const WritingLinks = async () => {
  const writings: WritingsProps[] = await fetchWritings();

  return (
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
  );
};
