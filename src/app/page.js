import HeroBanner from "@/components/HeroBanner";
import ThemePackage from "@/components/ThemePackage";
import Destination from "@/components/Destination";
import TradingPackage from "@/components/TradingPackage";
import { tours } from "@/utils/getTours";
import TourService from "@/components/TourService";
import BlogSection from "@/components/Blog/BlogSection";
import { blogsArray } from "@/utils/getBlogs";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ThemePackage />
      <Destination />
      <TradingPackage tours={tours} />
      <TourService />
      <BlogSection blogs={blogsArray} />
    </>
  );
}
