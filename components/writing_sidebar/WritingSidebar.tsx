import BlogLink from "../blog_link/BlogLink";

export default function WritingSidebar() {
  return (
    <div className="writing_sidebar">
      <div className="headline">
        <h2>Writings</h2>
        <button className="subscribe">Subscribe</button>
      </div>

      <div className="blog_links_container">
        <BlogLink
          href="/"
          title="Framer Sites, premières Impressions"
          date="10 Février 2023"
        />
      </div>
    </div>
  );
}
