import localFont from "next/font/local";

export const Neue_Mechanica = localFont({
  src: [
    {
      path: "./Neue_Mechanica/NeueMachina-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Neue_Mechanica/NeueMachina-Regular.otf",
      weight: "375",
      style: "normal",
    },
    {
      path: "./Neue_Mechanica/NeueMachina-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--neueMechanica",
});

export const Roboto_Mono = localFont({
  src: [
    {
      path: "./Roboto_Mono/RobotoMono-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Roboto_Mono/RobotoMono-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto_Mono/RobotoMono-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--robotoMono",
});
