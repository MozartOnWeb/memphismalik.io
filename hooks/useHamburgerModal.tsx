import { create } from "zustand";

type ModalProps = {
  state: "open" | "close";
  setState: (state: "open" | "close") => void;
};

export const useHamburgerModal = create<ModalProps>((set) => ({
  state: "close",
  setState: (state) => set({ state: state === "open" ? "close" : "open" }),
}));
