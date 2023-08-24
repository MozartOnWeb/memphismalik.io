//import sidebar
import WritingSidebar from "@/components/writing_sidebar/WritingSidebar";

export default async function WritingsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="writings-layout">
      <WritingSidebar />
      {children}
    </section>
  );
}
