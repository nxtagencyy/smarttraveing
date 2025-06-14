import Link from "next/link";
import SecondBanner from "@/components/SecondBanner";
import Wrapper from "@/components/Wrapper";
import { FaCalendar, FaPenNib } from "react-icons/fa6";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { getBlogs } from "@/utils/getBlogs";

const page = ({ params }) => {
  const blogsData = getBlogs(params);
  const blog = blogsData[0];

  return (
    <>
      <SecondBanner
        img={blog.attributes.image_url}
        alt={blog.attributes.title}
        title={blog.attributes.title}
      />
      <Wrapper>
        <div className="py-16">
          <div className="p-2 flex max-sm:flex-col gap-5">
            <p className="text-sm tracking-wider text-blue-500 capitalize">
              <Link href="/">rajasthan</Link>
            </p>
            <div className="flex items-center font-medium text-blue-500">
              <FaCalendar className="mr-1" />
              <p className="text-xs">
                {moment(blog.attributes.createdAt).format("MMMM Do YYYY")}
              </p>
            </div>
            <div className="flex items-center text-sm text-blue-500">
              <FaPenNib className="mr-1" />
              <p className="capitalize font-bold">By admin</p>
            </div>
          </div>
          <div className="prose max-w-none">
            <ReactMarkdown>{blog.attributes.description}</ReactMarkdown>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default page;
