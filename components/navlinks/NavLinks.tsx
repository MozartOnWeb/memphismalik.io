"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HomeIcon } from "@/public/assets/icons";

type NavLinkProps = {
  href?: string;
  name?: string;
  icon?: JSX.Element;
};

export const NavLink = ({ href, name, icon }: NavLinkProps) => {
  let pathname = usePathname() || "/";

  return (
    <Link
      className={"nav_link " + (pathname === href ? " active" : "")}
      href={href || "/"}
    >
      {icon}
      <p>{name}</p>
    </Link>
  );
};
