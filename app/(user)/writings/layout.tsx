import { usePathname, useParams } from "next/navigation";

//import sidebar
import WritingSidebar from "@/components/writing_sidebar/WritingSidebar";

export default async function WritingsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* {pathname.length > 9 ? null : <WritingSidebar />} */}
      <WritingSidebar />
      {children}
    </section>
  );
}
