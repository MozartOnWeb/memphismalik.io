import Image from "next/image";

import postImage from "@/public/assets/fullsize.webp";

export default function Writing() {
  return (
    <main className="writing-page">
      <section>
        <div className="title">
          <h1>Framer Sites first impressions</h1>
          <p>February 19, 2022</p>
        </div>

        <div className="content">
          <Image
            src={postImage}
            width={800}
            height={800}
            alt="Framer Sites first impressions"
          />
          <blockquote>
            Today, on a whim, I went live on YouTube to try Framer Sites and see
            what all the buzz is about. You can watch the recap here.
          </blockquote>

          <blockquote>
            It was a really fun hour of learning and building, especially
            because many people on the Framer team were in the stream to answer
            questions and guide me when I got stuck. After one hour, I had
            nearly recreated the home page of my personal website and deployed
            it instantly with a click.
          </blockquote>

          <blockquote>
            Here are my first impressions of Framer Sites:
          </blockquote>

          <h3>What I love</h3>
          <blockquote>
            Deploying a design instantly to the web is really fun — at the end
            of my stream, I clicked publish and was quite surprised to see just
            how fast my website appeared live on the internet with a shareable
            URL. Maybe one second? Or two? Of course, there wasn&apos;t a whole
            lot to the page — it&apos;s an HTML file with a bunch of inline
            styles. Yet, it&apos;s profound to go from a rich canvas-like editor
            to the public internet with a click.
          </blockquote>

          <blockquote>
            I&apos;ve written in the past about why you probably aren&pos;t
            updating your personal site, and one of the key reasons is that
            it&apos;s quite often too hard to make and deploy changes. This
            friction is gone with Framer Sites, which I suspect will motivate
            many more designers and developers to move their personal sites or
            portfolios over to this system because it will be the fastest way to
            adjust a color, or fix a typo, and have that change online
            instantly.
          </blockquote>
        </div>
      </section>
    </main>
  );
}
