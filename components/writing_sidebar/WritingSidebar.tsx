import { NavLink } from "../navlinks/NavLinks";

import {
  AMAIcon,
  BookmarksIcon,
  GithubIcon,
  HomeIcon,
  LinkedInIcon,
  TwitterIcon,
  WritingsIcon,
} from "@/public/assets/icons";

export default function WritingSidebar() {
  return (
    <div className="writing_sidebar">
      <div className="headline">
        <h2>Writings</h2>
        <button className="subscribe">Subscribe</button>
      </div>
    </div>
  );
}
