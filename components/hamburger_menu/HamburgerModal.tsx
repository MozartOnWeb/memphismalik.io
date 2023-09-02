"use client";

import {
  AMAIcon,
  BookmarksIcon,
  GithubIcon,
  HomeIcon,
  LinkedInIcon,
  TwitterIcon,
  WritingsIcon,
} from "@/public/assets/icons";

import { NavLink } from "../navlinks/NavLinks";

export default function HamburgerModal() {
  return (
    <div className="humburger-modal">
      <h1>Memphis Malik</h1>

      <div className="head_links">
        <NavLink href="/" name="Home" icon={<HomeIcon />} />
        <NavLink href="/writings" name="Writings" icon={<WritingsIcon />} />
      </div>

      <div className="me">
        <h3>Me</h3>
        <NavLink href="/amas" name="AMA" icon={<AMAIcon />} />
        <NavLink href="/bookmarks" name="Bookmarks" icon={<BookmarksIcon />} />
      </div>

      <div className="socials">
        <h3>Online</h3>
        <NavLink
          external
          href="https://github.com"
          name="Github"
          icon={<GithubIcon />}
        />
        <NavLink
          external
          href="https://linkedin.com"
          name="LinkedIn"
          icon={<LinkedInIcon />}
        />
        <NavLink
          external
          href="https://twitter.com"
          name="Twitter"
          icon={<TwitterIcon />}
        />
      </div>

      <div className="cta">
        <div className="separator" />

        <button className="sign_in">Sign in</button>
      </div>
    </div>
  );
}
