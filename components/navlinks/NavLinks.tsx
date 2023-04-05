import Link from "next/link";
import { HomeIcon } from "@/public/assets/icons";

export const NavLink = () => {
  return (
    <div className="nav_link">
      <Link href="/">
        <HomeIcon />
        <p>Home</p>
      </Link>
    </div>
  );
};
