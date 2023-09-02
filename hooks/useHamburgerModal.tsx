import { create } from "zustand";

type ModalProps = {
  state: "open" | "close";
  setOpen: (state: "open") => void;
  setClose: (state: "close") => void;
};

export const useHamburgerModal = create<ModalProps>((set) => ({
  state: "close",
  setOpen: (state) => set({ state: "open" }),
  setClose: (state) => set({ state: "close" }),
}));
