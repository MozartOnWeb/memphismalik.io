import Link from "next/link";

//import PortableText
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/rich_text/RichText";

//import helpers function
import { formatDate } from "@/lib/helpers";

//import components
import CommentsSeparator from "@/components/comments_section/CommentsSeparator";
import Comments from "@/components/comments_section/Comments";

//import fetchAma
// import { fetchAma } from "@/sanity/fetch";

import Image from "next/image";

import Profile from "@/public/assets/profile.jpg";
import { LeftArrowIcon } from "@/public/assets/icons";

export default async function AmaContent({ ama }: { ama: string }) {
  return (
    <>
      <div className="header">
        <Link href={"/amas"}>
          <LeftArrowIcon />
        </Link>
      </div>
      <section>
        <div className="ama_headline">
          <div className="author">
            <Image className="author_profile" src={Profile} alt="" />
            <p className="author_name">John Doe</p>
          </div>
          <p className="date">Nov 1, 2021</p>
        </div>

        <div className="content">
          <h1>
            What advice would you give to a designer that knows frontend
            development and want to learn more about full-stack development?
          </h1>
          <p>
            I do a lot of frontend development in my day-to-day job. What I
            struggle with learning though, is all the things that make the site
            not just look and feel right, but actually make it work like
            creating a backend, communicating with a DB, CRUD actions, user
            authentication etc. I would love to be able to build something like
            what you&apos;ve done with this site myself one day.
          </p>
          <p>
            It seems like there are so many things I could learn; Next.js,
            Vercel, Firebase, Gatsby, Node.js, Ruby on Rails ... the list seems
            endless. I don&apos;t know where to start or how to approach it and
            would love to hear what you&apos;ve done to be able to build
            something like this.
          </p>
        </div>

        <CommentsSeparator />
        <Comments />
      </section>
    </>
  );
}
