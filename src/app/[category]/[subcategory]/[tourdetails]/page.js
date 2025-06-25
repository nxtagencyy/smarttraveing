import TourDetails from "@/components/Tour/TourDetails";
import { getTours } from "@/utils/getTours";

const Page = async ({ params }) => {
  const tours = await getTours(); // ✅ async fetch
  const tour = tours.find((t) => t.slug === params.tourdetails);

  if (!tour) return <div>Oops, no data found.</div>;

  return <TourDetails tourdetail={tour} />;
};

export default Page;
