"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LinkArrowIcon } from "@/public/assets/icons";

type NavLinkProps = {
  href?: string;
  name?: string;
  icon?: JSX.Element;
  external?: boolean;
};

export const NavLink = ({ href, name, icon, external }: NavLinkProps) => {
  let pathname = usePathname() || "/";

  return (
    <Link
      className={"nav_link " + (pathname === href ? " active" : "")}
      href={href || "/"}
      target={external ? "_blank" : "_self"}
    >
      <div>
        {icon}
        <p>{name}</p>
      </div>
      {external && <LinkArrowIcon className={"link_arrow"} />}
    </Link>
  );
};
