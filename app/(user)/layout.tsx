//import styles
import "../../sass/index.scss";

// import components
import Sidebar from "@/components/main_sidebar/MainSidebar";
import HamburgerModal from "@/components/hamburger_menu/HamburgerModal";

//import fonts
import { Neue_Mechanica, Roboto_Mono } from "@/public/assets/fonts";

export const metadata = {
  title: {
    default: "Memphis Malik",
    template: "%s | Memphis Malik",
  },
  keywords: ["Memphis Malik", "Ousmane Maiga", "Ousmane Maïga"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    //google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    //yandex: "14d2e73487fa6c71",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${Neue_Mechanica.variable} ${Roboto_Mono.variable} main-layout`}
      >
        <HamburgerModal />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
