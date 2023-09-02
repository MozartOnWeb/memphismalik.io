"use client";

import { useHamburgerModal } from "@/hooks/useHamburgerModal";

import { motion } from "framer-motion";

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
  const { setClose } = useHamburgerModal();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="hamburger_modal_overlay"
      onClick={() => {
        setClose("close");
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
        className="hamburger_modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="hamburger_modal_head">
          <h1>Memphis Malik</h1>

          <svg
            onClick={() => setClose("close")}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>

        <motion.div className="head_links">
          <NavLink
            onClick={() => setClose("close")}
            href="/"
            name="Home"
            icon={<HomeIcon />}
          />
          <NavLink
            onClick={() => setClose("close")}
            href="/writings"
            name="Writings"
            icon={<WritingsIcon />}
          />
        </motion.div>

        <div className="me">
          <h3>Me</h3>
          <NavLink
            onClick={() => setClose("close")}
            href="/amas"
            name="AMA"
            icon={<AMAIcon />}
          />
          <NavLink
            onClick={() => setClose("close")}
            href="/bookmarks"
            name="Bookmarks"
            icon={<BookmarksIcon />}
          />
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
      </motion.div>
    </motion.div>
  );
}
