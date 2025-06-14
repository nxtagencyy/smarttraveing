import BlogCard from "@/components/Blog/BlogCard";
import Wrapper from "@/components/Wrapper";
import { blogsArray } from "@/utils/getBlogs";
import Link from "next/link";
import SecondBanner from "@/components/SecondBanner";

const page = () => {
  return (
    <>
      <SecondBanner img="/rajasthan-slide.webp" alt="rajasthan" title="blogs" />
      <Wrapper>
        <div className="md:flex items-stretch py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogsArray.length === 0 ? (
              <div>No Data Found</div>
            ) : (
              blogsArray.map((item) => (
                <div key={item.id}>
                  <BlogCard item={item} />
                </div>
              ))
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default page;
