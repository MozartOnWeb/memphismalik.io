//import PortableText
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/rich_text/RichText";

//import helpers function
import { formatDate } from "@/lib/helpers";

//import components
import CommentsSeparator from "@/components/comments_section/CommentsSeparator";
import Comments from "@/components/comments_section/Comments";

//import like icon
import { LikeIcon } from "@/public/assets/icons";

//import fetchWriting
import { fetchWriting } from "@/sanity/fetch";

export default async function WritingContent({ writing }: { writing: string }) {
  const writings = await fetchWriting(writing);
  return (
    <>
      <div className="header">
        <div className="like_button">
          <LikeIcon />
          26
        </div>
      </div>
      <section>
        <div className="title">
          <h1>{writings.title}</h1>
          <p>{formatDate(writings.publishedAt)}</p>
        </div>

        <div className="content">
          <PortableText components={RichTextComponents} value={writings.body} />
        </div>

        <CommentsSeparator />
        <Comments />
      </section>
    </>
  );
}
