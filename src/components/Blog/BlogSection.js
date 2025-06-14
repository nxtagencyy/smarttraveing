import Link from "next/link";
import SectionText from "../SectionText";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { FaCalendar, FaPenNib } from "react-icons/fa6";
import moment from "moment";

const BlogSection = ({ blogs }) => {
  return (
    <div className="py-16">
      <Wrapper>
        <SectionText title="Stories, tips, and guides" />
        {blogs.length > 0 ? (
          <div className="lg:flex items-stretch">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                  <div className="absolute inset-0 bg-black/30">
                    <div className="flex items-center p-6 font-medium leading-3 text-white absolute top-0 right-0">
                      <FaCalendar className="mr-1" />
                      <p className="text-xs">
                        {moment(blogs[0]?.attributes.createdAt).format(
                          "MMMM Do YYYY"
                        )}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-xl font-semibold 5 text-white capitalize line-clamp-2">
                        {blogs[0]?.attributes.title}
                      </p>
                      <div className="flex items-center text-sm leading-4 text-white mt-2">
                        <FaPenNib className="mr-1" />
                        <p className="capitalize"> By admin</p>
                      </div>
                      <Link
                        href={`/blogs/${blogs[0]?.attributes.slug}`}
                        className="flex items-center mt-4 text-white group"
                      >
                        <div className="pr-2 text-sm font-medium leading-none group-hover:text-eucalyptus">
                          Read More
                        </div>
                        <svg
                          className="fill-stroke group-hover:text-eucalyptus"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={blogs[0]?.attributes.thumbnail_url}
                    className="w-full object-cover"
                    alt={blogs[0]?.attributes.title}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div className="absolute inset-0 bg-black/30">
                    <div className="flex items-center p-6 font-medium leading-3 text-white absolute top-0 right-0">
                      <FaCalendar className="mr-1" />
                      <p className="text-xs">
                        {moment(blogs[0]?.attributes.createdAt).format(
                          "MMMM Do YYYY"
                        )}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-xl font-semibold 5 text-white capitalize line-clamp-2">
                        {blogs[0]?.attributes.title}
                      </p>
                      <div className="flex items-center text-sm leading-4 text-white mt-2">
                        <FaPenNib className="mr-1" />
                        <p className="capitalize"> By admin</p>
                      </div>
                      <Link
                        href={`/blogs/${blogs[0]?.attributes.slug}`}
                        className="flex items-center mt-4 text-white group"
                      >
                        <div className="pr-2 text-sm font-medium leading-none group-hover:text-eucalyptus">
                          Read More
                        </div>
                        <svg
                          className="fill-stroke group-hover:text-eucalyptus"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={blogs[0]?.attributes.thumbnail_url}
                    className="w-full object-cover"
                    alt={blogs[0]?.attributes.title}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-black/30">
                  <div className="flex items-center p-6 font-medium leading-3 text-white absolute top-0 right-0">
                    <FaCalendar className="mr-1" />
                    <p className="text-xs">
                      {moment(blogs[0]?.attributes.createdAt).format(
                        "MMMM Do YYYY"
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-xl font-semibold 5 text-white capitalize line-clamp-2">
                      {blogs[0]?.attributes.title}
                    </p>
                    <div className="flex items-center text-sm leading-4 text-white mt-2">
                      <FaPenNib className="mr-1" />
                      <p className="capitalize"> By admin</p>
                    </div>
                    <Link
                      href={`/blogs/${blogs[0]?.attributes.slug}`}
                      className="flex items-center mt-4 text-white group"
                    >
                      <div className="pr-2 text-sm font-medium leading-none group-hover:text-eucalyptus">
                        Read More
                      </div>
                      <svg
                        className="fill-stroke group-hover:text-eucalyptus"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <Image
                  src={blogs[0]?.attributes.thumbnail_url}
                  className="w-full mt-8 md:mt-6 h-96 object-cover"
                  alt={blogs[0]?.attributes.title}
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <div className="absolute inset-0 bg-black/30">
                  <div className="flex items-center p-6 font-medium leading-3 text-white absolute top-0 right-0">
                    <FaCalendar className="mr-1" />
                    <p className="text-xs">
                      {moment(blogs[0]?.attributes.createdAt).format(
                        "MMMM Do YYYY"
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-xl font-semibold 5 text-white capitalize line-clamp-2">
                      {blogs[0]?.attributes.title}
                    </p>
                    <div className="flex items-center text-sm leading-4 text-white mt-2">
                      <FaPenNib className="mr-1" />
                      <p className="capitalize"> By admin</p>
                    </div>
                    <Link
                      href={`/blogs/${blogs[0]?.attributes.slug}`}
                      className="flex items-center mt-4 text-white group"
                    >
                      <div className="pr-2 text-sm font-medium leading-none group-hover:text-eucalyptus">
                        Read More
                      </div>
                      <svg
                        className="fill-stroke group-hover:text-eucalyptus"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <Image
                  src={blogs[0]?.attributes.thumbnail_url}
                  className="w-full h-96 object-cover"
                  alt={blogs[0]?.attributes.title}
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-black/30">
                    <div className="flex items-center p-6 font-medium leading-3 text-white absolute top-0 right-0">
                      <FaCalendar className="mr-1" />
                      <p className="text-xs">
                        {moment(blogs[0]?.attributes.createdAt).format(
                          "MMMM Do YYYY"
                        )}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-xl font-semibold 5 text-white capitalize line-clamp-2">
                        {blogs[0]?.attributes.title}
                      </p>
                      <div className="flex items-center text-sm leading-4 text-white mt-2">
                        <FaPenNib className="mr-1" />
                        <p className="capitalize"> By admin</p>
                      </div>
                      <Link
                        href={`/blogs/${blogs[0]?.attributes.slug}`}
                        className="flex items-center mt-4 text-white group"
                      >
                        <div className="pr-2 text-sm font-medium leading-none group-hover:text-eucalyptus">
                          Read More
                        </div>
                        <svg
                          className="fill-stroke group-hover:text-eucalyptus"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={blogs[0]?.attributes.thumbnail_url}
                    className="w-full object-cover"
                    alt={blogs[0]?.attributes.title}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                  <div className="absolute inset-0 bg-black/30">
                    <div className="flex items-center p-6 font-medium leading-3 text-white absolute top-0 right-0">
                      <FaCalendar className="mr-1" />
                      <p className="text-xs">
                        {moment(blogs[0]?.attributes.createdAt).format(
                          "MMMM Do YYYY"
                        )}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-xl font-semibold 5 text-white capitalize line-clamp-2">
                        {blogs[0]?.attributes.title}
                      </p>
                      <div className="flex items-center text-sm leading-4 text-white mt-2">
                        <FaPenNib className="mr-1" />
                        <p className="capitalize"> By admin</p>
                      </div>
                      <Link
                        href={`/blogs/${blogs[0]?.attributes.slug}`}
                        className="flex items-center mt-4 text-white group"
                      >
                        <div className="pr-2 text-sm font-medium leading-none group-hover:text-eucalyptus">
                          Read More
                        </div>
                        <svg
                          className="fill-stroke group-hover:text-eucalyptus"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={blogs[0]?.attributes.thumbnail_url}
                    className="w-full object-cover"
                    alt={blogs[0]?.attributes.title}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>no blogs found</div>
        )}
      </Wrapper>
    </div>
  );
};

export default BlogSection;
