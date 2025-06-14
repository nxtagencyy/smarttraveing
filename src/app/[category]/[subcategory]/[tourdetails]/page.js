import TourDetails from "@/components/Tour/TourDetails";
import { getTours } from "@/utils/getTours";

const page = ({ params }) => {
  const tours = getTours(params);
  if (tours.length === 0) return <div>oops no data found</div>;
  return <TourDetails tourdetail={tours[0]} />;
};

export default page;
