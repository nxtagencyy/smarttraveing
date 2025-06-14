import Image from "next/image";
import Link from "next/link";
import { FaAngleRight, FaClockRotateLeft } from "react-icons/fa6";

const PackageCard = ({ item }) => {
  return (
    <div className="w-full max-w-[300px] overflow-hidden bg-white rounded-lg select-none">
      <div className="overflow-hidden relative">
        <Image
          className="object-cover object-center w-full h-56 transition hover:scale-125 duration-500 pointer-events-none"
          src={item.attributes.thumbnail_url}
          alt={item.attributes.title}
          width={1000}
          height={1000}
        />
        {item.attributes.offers && (
          <div className="flex items-center p-4 font-medium leading-3 text-white absolute top-0 right-0">
            <p className="text-sm bg-blue-600 p-1">Offers</p>
          </div>
        )}
      </div>
      <div className="flex items-center px-6 py-3 text-white bg-gray-900">
        <svg
          aria-label="location pin icon"
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
          />
        </svg>
        <h1 className="px-2 text-lg capitalize">
          {item.attributes.destinations}
        </h1>
      </div>
      <div className="px-6 py-4 h-40">
        <FaClockRotateLeft className="float-left mt-1 mr-2 text-sm" />
        <p className="text-sm font-semibold pb-2 capitalize">
          {item.attributes.nights} Nights / {item.attributes.days} Days
        </p>
        <p className="line-clamp-2 text-lg font-bold">
          {item.attributes.title}
        </p>
        <Link
          href={`/destinations/${item.attributes.destinations}/${item.attributes.slug}`}
          className="flex items-center mt-4 group"
        >
          <p className="mr-2 font-medium group-hover:text-eucalyptus hover-underline">
            More Information
          </p>
          <div className="rounded-full bg-blue-500 p-1 group-hover:bg-eucalyptus transition duration-500">
            <FaAngleRight color="white" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
