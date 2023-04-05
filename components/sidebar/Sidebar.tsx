import { NavLink } from "../navlinks/NavLinks";

import {
  AMAIcon,
  BookmarksIcon,
  HomeIcon,
  WritingsIcon,
} from "@/public/assets/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Memphis Malik</h1>

      <div className="head_links">
        <NavLink href="/" name="Home" icon={<HomeIcon />} />
        <NavLink href="/writings" name="Writings" icon={<WritingsIcon />} />
      </div>

      <div className="me">
        <h3>Me</h3>
        <NavLink href="/ama" name="AMA" icon={<AMAIcon />} />
        <NavLink href="/bookmarks" name="Bookmarks" icon={<BookmarksIcon />} />
      </div>

      <div className="socials">
        <h3>Online</h3>
        <NavLink
          external
          href="https://github.com"
          name="Github"
          icon={<AMAIcon />}
        />
        <NavLink
          external
          href="https://linkedin.com"
          name="LinkedIn"
          icon={<BookmarksIcon />}
        />
        <NavLink
          external
          href="https://twitter.com"
          name="Twitter"
          icon={<BookmarksIcon />}
        />
      </div>
    </div>
  );
}
