import localFont from "next/font/local";

export const Neue_Mechanica = localFont({
  src: [],
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
