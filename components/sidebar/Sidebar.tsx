import Link from "next/link";

import { NavLink } from "../navlinks/NavLinks";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Memphis Malik</h1>

      <div className="head_links">
        <NavLink />
      </div>
    </div>
  );
}
