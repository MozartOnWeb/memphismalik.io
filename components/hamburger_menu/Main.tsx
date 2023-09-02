"use client";

import HamburgerModal from "./HamburgerModal";

import { useHamburgerModal } from "@/hooks/useHamburgerModal";

import { AnimatePresence } from "framer-motion";

export default function HamburgerMain() {
  const { state } = useHamburgerModal();
  return (
    <AnimatePresence>
      {state === "open" ? <HamburgerModal /> : null}
    </AnimatePresence>
  );
}
