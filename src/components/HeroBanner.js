"use client";
import Carousel from "react-multi-carousel";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";

const imgSlider = [
  {
    id: 1,
    img: "/himachal-slide.webp",
    alt: "himachal-pradesh",
    title: "Nature's Paradise",
    name: "Himachal Pradesh",
  },
  {
    id: 2,
    img: "/rajasthan-slide.webp",
    alt: "rajasthan",
    title: "Land of Royalty",
    name: "Rajasthan",
  },
  {
    id: 3,
    img: "/goa-slide.webp",
    alt: "goa",
    title: "The Gem of India's West Coast",
    name: "Goa",
  },
  {
    id: 4,
    img: "/kashmir-slide.webp",
    alt: "kashmir",
    title: "Majestic Himalayan Escapes",
    name: "Kashmir & Ladakh",
  },
  {
    id: 5,
    img: "/uttrakhand-slide.jpg",
    alt: "uttrakhand",
    title: "The Himalayan Haven",
    name: "Uttrakhand",
  },
];

const responsive = {
  largedesktop: {
    breakpoint: { max: 10000, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className="absolute top-3/4 md:top-1/2 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black/50 rounded-full z-10 flex items-center justify-center cursor-pointer hover:bg-eucalyptus ml-10 -translate-x-24 opacity-0 ease-in duration-500 group-hover:translate-x-0 group-hover:opacity-100"
    >
      <FaAngleLeft className="text-sm md:text-lg" />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className="absolute right-0 top-3/4 md:top-1/2 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black/50 rounded-full z-10 flex items-center justify-center cursor-pointer hover:bg-eucalyptus mr-10 translate-x-24 opacity-0 ease-in duration-500 group-hover:translate-x-0 group-hover:opacity-100"
    >
      <FaAngleRight className="text-sm md:text-lg" />
    </div>
  );
};

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3000}
        arrows={true}
        autoPlay={true}
        customTransition="all .5"
        transitionDuration={500}
        className="group"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {imgSlider.map((item) => (
          <div key={item.id}>
            <Image
              src={item.img}
              alt={item.alt}
              width={3840}
              height={2160}
              className="w-auto h-96 lg:h-1/5 object-cover"
            />
            <div className="absolute inset-0 bg-black/25 grid content-center">
              <div className="grid grid-cols-2">
                <div className="text-center">
                  <p className="text-sm lg:text-3xl font-caveat font-bold">
                    {item.title}
                  </p>
                  <h1 className="text-xl lg:text-5xl font-bold">{item.name}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
