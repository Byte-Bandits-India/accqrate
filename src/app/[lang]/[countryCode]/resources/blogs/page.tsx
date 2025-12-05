import HeroResourceSection from "./Hero";
import RecentBlogPosts from "./RecentBlogs";
import ZatcaSection from "@/Components/ZatcaSection";
export default function ResourcesPage() {
  return (
    <main className="bg-[#F8F6FF] overflow-hidden">
      <HeroResourceSection />
      <RecentBlogPosts />
      <ZatcaSection />
    </main>
  );
}
