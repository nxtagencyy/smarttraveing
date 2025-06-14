import SecondBanner from "@/components/SecondBanner";
import Wrapper from "@/components/Wrapper";
import TourCategory from "@/components/Tour/TourCategory";
import { getTours } from "@/utils/getTours";
import { getBanner } from "@/utils/getBanner";

const page = async ({ params }) => {
  const toursData = getTours(params);
  const bannerData = getBanner(params);

  return (
    <>
      <SecondBanner
        img="/kashmir-slide.webp"
        alt={bannerData[0]?.attributes.title}
        title={bannerData[0]?.attributes.title}
      />
      <Wrapper>
        <div className="text-lg pb-10 pt-10">
          {bannerData[0]?.attributes.description}
        </div>
      </Wrapper>
      <TourCategory
        tours={toursData}
        params={params.subcategory}
        title={bannerData[0]?.attributes.title}
      />
    </>
  );
};

export default page;
