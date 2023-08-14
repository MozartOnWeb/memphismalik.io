//import PortableText
import { PortableText } from "@portabletext/react";

//import fetchWriting
import { fetchWriting } from "@/sanity/fetch";

//import helpers function
import { formatDate } from "@/lib/helpers";

export default async function Writing({
  params: { writing },
}: {
  params: { writing: string };
}) {
  const writings = await fetchWriting(writing);

  return (
    <main className="writing-page">
      <section>
        <div className="title">
          <h1>{writings.title}</h1>
          <p>{formatDate(writings.publishedAt)}</p>
        </div>

        <div className="content">
          <PortableText value={writings.body} />
        </div>
      </section>
    </main>
  );
}
