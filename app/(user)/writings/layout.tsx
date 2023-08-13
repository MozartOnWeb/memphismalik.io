//import sidebar
import WritingSidebar from "@/components/writing_sidebar/WritingSidebar";

export default function WritingsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <WritingSidebar />
      {children}
    </section>
  );
}
