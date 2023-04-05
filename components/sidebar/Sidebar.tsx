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
    </div>
  );
}
