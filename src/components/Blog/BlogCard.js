import Image from "next/image";
import { FaCalendar, FaPenNib } from "react-icons/fa6";
import Link from "next/link";
import moment from "moment";

const BlogCard = ({ item }) => {
  return (
    <Link href={`/blogs/${item.attributes.slug}`}>
      <div className="group overflow-hidden">
        <Image
          className="object-cover w-full md:h-52 xl:h-72 transition group-hover:scale-110 duration-500"
          src={item.attributes.thumbnail_url}
          alt={item.attributes.title}
          width={1000}
          height={1000}
        />
      </div>
      <p className="mt-2 text-sm tracking-wider text-blue-500 capitalize">
        {item.attributes.destinations}
      </p>
      <h2 className="mt-2 text-xl font-semibold capitalize hover:text-eucalyptus transition ease-in-out duration-500">
        {item.attributes.title}
      </h2>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center font-medium text-blue-500">
          <FaCalendar className="mr-1" />
          <p className="text-xs">
            {moment(item.attributes.createdAt).format("MMMM Do YYYY")}
          </p>
        </div>
        <div className="flex items-center text-sm text-blue-500">
          <FaPenNib className="mr-1" />
          <p className="capitalize font-bold">By owner</p>
        </div>
      </div>
      <div>
        <div className="inline-flex items-center mt-4 font-semibold lg:mb-0 hover:text-eucalyptus transition ease-in-out duration-500">
          View Blog »
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
