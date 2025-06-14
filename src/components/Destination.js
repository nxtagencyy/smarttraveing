import SectionText from "@/components/SectionText";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";

const imgSlider = [
  {
    id: 1,
    img: "/himachal-slide.webp",
    name: "Himachal Pradesh",
    url: "/destinations/himachal-pradesh",
  },
  {
    id: 2,
    img: "/rajasthan-slide.webp",
    name: "Rajasthan",
    url: "/destinations/rajasthan",
  },
  {
    id: 3,
    img: "/goa-slide.webp",
    name: "Goa",
    url: "/destinations/goa",
  },
  {
    id: 4,
    img: "/kashmir-slide.webp",
    name: "Jammu & Kashmir",
    url: "/destinations/jammu-kashmir",
  },
  {
    id: 5,
    img: "/uttrakhand-slide.jpg",
    name: "Uttrakhand",
    url: "/destinations/uttarakhand",
  },
];
const Destination = () => {
  return (
    <div className="py-16">
      <Wrapper>
        <SectionText
          title="Destination by States"
          desc="Explore the india with our destination by states packages"
        />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {imgSlider.map((item) => (
            <Link href={item.url} key={item.id}>
              <div className="py-4 w-52 lg:w-56 xl:w-56 cursor-pointer group mx-auto">
                <div className="overflow-hidden hover:rounded-full">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    className="transition group-hover:scale-110 duration-500 h-48 lg:h-52 object-cover pointer-events-none"
                  />
                </div>
                <div className="mt-5 capitalize text-2xl text-center group-hover:text-eucalyptus">
                  {item.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Destination;
