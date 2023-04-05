import { NavLink } from "../navlinks/NavLinks";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Memphis Malik</h1>

      <div className="head_links">
        <NavLink href="/" name="Home" />
        <NavLink href="/writings" name="Writings" />
      </div>
    </div>
  );
}
