//import sidebar
import AmaSidebar from "@/components/ama_sidebar/AmaSidebar";
export default function WritingsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AmaSidebar />
      {children}
    </section>
  );
}
