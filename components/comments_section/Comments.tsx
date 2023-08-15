import Image from "next/image";

import Profile from "@/public/assets/profile.jpg";

export default function Comments() {
  return (
    <div className="comments">
      <div className="comment">
        <div className="headline">
          <div className="author">
            <Image className="author_profile" src={Profile} alt="" />
            <p className="author_name">John Doe</p>
          </div>
          <p className="date">Nov 1, 2021</p>
        </div>
        <div className="content">
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
      </div>
    </div>
  );
}
