import SecondBanner from "@/components/SecondBanner";
import Wrapper from "@/components/Wrapper";
import TourCategory from "@/components/Tour/TourCategory";
import { getTours } from "@/utils/getTours";
import { getBanner } from "@/utils/getBanner";

const Page = async ({ params }) => {
  const tours = await getTours(); // ✅ fetch all tours
  const filteredTours = tours.filter(
    (item) =>
      item.destinations_slug === params.subcategory ||
      item.activities_slug === params.subcategory
  );

  const bannerData = await getBanner(params); // ✅ this also should be awaited

  return (
    <>
      <SecondBanner
        img="/kashmir-slide.webp"
        alt={bannerData?.[0]?.attributes?.title}
        title={bannerData?.[0]?.attributes?.title}
      />
      <Wrapper>
        <div className="text-lg pb-10 pt-10">
          {bannerData?.[0]?.attributes?.description}
        </div>
      </Wrapper>
      <TourCategory
        tours={filteredTours}
        params={params.subcategory}
        title={bannerData?.[0]?.attributes?.title}
      />
    </>
  );
};

export default Page;
