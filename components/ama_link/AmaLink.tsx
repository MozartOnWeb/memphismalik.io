"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Profile from "@/public/assets/profile.jpg";

type AmaLinkProps = {
  href?: string;
  question?: string;
  author?: string;
  profile?: string | any;
};

export const AmaLink = ({ href, question, author, profile }: AmaLinkProps) => {
  let pathname = usePathname() || "/";

  return (
    <Link
      className={"ama_link" + (pathname === `/amas/${href}` ? " active" : "")}
      href={`/amas/${href}` || "/amas"}
    >
      <h3>{question}</h3>
      <div className="author">
        <Image
          className="author_profile"
          src={profile || Profile}
          width={800}
          height={800}
          alt=""
        />
        <p className="author_name">{author}</p>
      </div>
    </Link>
  );
};

export default AmaLink;
