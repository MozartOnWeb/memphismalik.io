//import components
import BlogLink from "../blog_link/BlogLink";

//import icons
import { SubscribeIcon } from "@/public/assets/icons";

const writingLinks = [
  {
    href: "/writings/1",
    title: "Design critique for fund and profit",
    date: "February 19, 2023",
  },
  {
    href: "/writings/2",
    title: "The Side Project Prophecy",
    date: "January 17, 2022",
  },
  {
    href: "/writings/3",
    title: "What I've learned so far about design advising and angel investing",
    date: "July 18, 2021",
  },
  {
    href: "/writings/4",
    title: "Make a personal changelog",
    date: "April 29, 2021",
  },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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

      <div className="blog_links_container">
        {writingLinks.map((link) => (
          <BlogLink
            key={link.href}
            href={link.href}
            title={link.title}
            date={link.date}
          />
        ))}
      </div>
    </div>
  );
}
