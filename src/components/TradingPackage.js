"use client";
import SectionText from "@/components/SectionText";
import Wrapper from "./Wrapper";
import Carousel from "react-multi-carousel";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import PackageCard from "./PackageCard";

const responsive = {
  largedesktop: {
    breakpoint: { max: 4000, min: 1366 },
    items: 4,
  },
  smalldesktop: {
    breakpoint: { max: 1365, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const CustomLeftArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/3 w-[50px] h-[50px] bg-black/50 rounded-full z-10 flex items-center justify-center cursor-pointer hover:bg-eucalyptus ml-10 -translate-x-24 opacity-0 ease-in duration-500 group-hover:translate-x-0 group-hover:opacity-100"
  >
    <FaAngleLeft className="text-white text-lg" />
  </div>
);

const CustomRightArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-0 top-1/3 w-[50px] h-[50px] bg-black/50 rounded-full z-10 flex items-center justify-center cursor-pointer hover:bg-eucalyptus mr-10 translate-x-24 opacity-0 ease-in duration-500 group-hover:translate-x-0 group-hover:opacity-100"
  >
    <FaAngleRight className="text-white text-lg" />
  </div>
);

const TradingPackage = ({ tours }) => {
  const isLoading = !Array.isArray(tours);
  const hasData = Array.isArray(tours) && tours.length > 0;

  return (
    <div
      style={{
        backgroundImage: `url("/bg-image.png")`,
      }}
      className="bg-[#f1f6ff] bg-right-bottom bg-no-repeat bg-auto py-16"
    >
      <Wrapper>
        <SectionText
          title="trading tour packages"
          desc="Explore the india with our trading tour packages"
        />

        {isLoading && (
          <p className="text-center text-gray-500">Loading tours...</p>
        )}

        {hasData && (
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            partialVisible={true}
            arrows={true}
            className="group"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {tours.map((item) => (
              <div key={item.id}>
                <PackageCard item={item} />
              </div>
            ))}
          </Carousel>
        )}

        {!isLoading && !hasData && (
          <p className="text-center text-red-500">No tour packages found.</p>
        )}
      </Wrapper>
    </div>
  );
};

export default TradingPackage;
