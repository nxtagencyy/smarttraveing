import SectionText from "./SectionText";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";

const themesData = [
  {
    id: 1,
    title: "Safari and Natural Parks",
    img: "/safari.webp",
    url: "/activities/safari-and-natural-parks",
  },
  {
    id: 2,
    title: "Adventure and Trekking",
    img: "/adventure.webp",
    url: "/activities/adventure-and-trekking",
  },
  {
    id: 3,
    title: "Sea and Beaches",
    img: "/sea.webp",
    url: "/activities/sea-and-beaches",
  },
  {
    id: 4,
    title: "Mountains, Lakes, and Rivers",
    img: "/mountains.webp",
    url: "/activities/mountains-and-lakes-and-rivers",
  },
  {
    id: 5,
    title: "Art, History, and Cultural Trips",
    img: "/art.webp",
    url: "/activities/art-and-history-and-cultural-trips",
  },
  {
    id: 6,
    title: "Romance and Honeymoon",
    img: "/romance.webp",
    url: "/activities/romance-and-honeymoon",
  },
  {
    id: 7,
    title: "Weekend Escapes",
    img: "/weekend.webp",
    url: "/activities/weekend-escapes",
  },
];

const ThemePackage = () => {
  return (
    <Wrapper>
      <SectionText
        title="tour themes"
        desc="Explore the india with our tour theme packages"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {themesData.map((item) => (
          <Link href={item.url} key={item.id}>
            <div className="relative overflow-hidden group">
              <Image
                src={item.img}
                className="w-full object-cover transition group-hover:scale-110 duration-500"
                alt={item.title}
                height={1000}
                width={1000}
              />
              <div className="absolute inset-0 bg-black/5">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xl font-semibold 5 text-white capitalize">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default ThemePackage;
