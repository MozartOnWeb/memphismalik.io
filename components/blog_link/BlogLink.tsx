"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href?: string;
  title?: string;
  date?: string;
};

export const BlogLink = ({ href, title, date }: NavLinkProps) => {
  let pathname = usePathname() || "/";

  return (
    <Link
      className={"blog_link" + (pathname === href ? " active" : "")}
      href={href || "/"}
    >
      <h3>{title}</h3>
      <p>{date}</p>
    </Link>
  );
};

export default BlogLink;
