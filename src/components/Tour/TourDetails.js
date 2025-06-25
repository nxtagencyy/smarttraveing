import Wrapper from "../Wrapper";
import SecondBanner from "../SecondBanner";
import ReactMarkdown from "react-markdown";
import {
  FaClockRotateLeft,
  FaCar,
  FaBowlFood,
  FaCamera,
  FaHotel,
  FaCheck,
} from "react-icons/fa6";
import { VscChromeClose } from "react-icons/vsc";
import BookingForm from "../formData/BookingForm";

const TourDetails = ({ tourdetail }) => {
  return (
    <>
      <SecondBanner img={tourdetail.image_url} alt={tourdetail.title} />

      <Wrapper>
        <div className="py-10 border-b-2">
          <h1 className="text-2xl md:text-5xl font-bold text-[#002248]">
            {tourdetail.title}
          </h1>
          <div className="flex md:px-6 py-3 gap-4">
            <div className="flex items-center">
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
                {tourdetail.destinations}
              </h1>
            </div>
            <div className="flex items-center">
              <FaClockRotateLeft className="float-left mr-2 text-sm" />
              <p className="text-sm font-semibold capitalize">
                {tourdetail.nights} Nights /{tourdetail.days} Days
              </p>
            </div>
          </div>
          <div className="flex max-sm:flex-col md:px-6 py-3 gap-4">
            <div className="flex items-center">
              <FaBowlFood className="mr-1 text-2xl text-[#ff5e00]" />
              <p className="text-xl">Meals</p>
            </div>
            <div className="flex items-center">
              <FaHotel className="mr-1 text-2xl text-[#ff5e00]" />
              <p className="text-xl">Hotel</p>
            </div>
            <div className="flex items-center">
              <FaCar className="mr-1 text-2xl text-[#ff5e00]" />
              <p className="text-xl">Transport</p>
            </div>
            <div className="flex items-center">
              <FaCamera className="mr-1 text-2xl text-[#ff5e00]" />
              <p className="text-xl">Sightseeing</p>
            </div>
          </div>
          <div className="mt-5 text-xl font-semibold">Price : On Request</div>
        </div>
        <div className="py-10">
          <div className="capitalize text-[#002248] text-3xl font-semibold">
            about this tour
          </div>
          <p className="mt-5">{tourdetail.about}</p>
        </div>
        <div className="py-10">
          <div className="capitalize text-[#002248] text-2xl font-semibold pb-5">
            What&#8217;s Included
          </div>
          <div className="sm:flex items-center justify-between gap-x-6 xl:gap-x-8">
            <ul>
              {tourdetail.included.map((item) => (
                <li key={item.id} className="pb-2">
                  <span>
                    <FaCheck className="mr-1 inline-block" />
                  </span>
                  <span className="capitalize">{item.text}</span>
                </li>
              ))}
            </ul>
            <ul className="max-sm:mt-5">
              {tourdetail.excluded.map((item) => (
                <li key={item.id} className="pb-2">
                  <span>
                    <VscChromeClose className="mr-1 inline-block" />
                  </span>
                  <span className="capitalize">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-10">
          <div className="capitalize text-[#002248] text-2xl font-semibold pb-5">
            Tour Plan
          </div>
          {tourdetail.tour_details.map((item, index) => (
            <details
              key={index + 1}
              className="w-full mb-5 max-w-[1366px] bg-[#f2f6ff] py-2 rounded-md shadow-md group mx-auto max-h-[56px] open:!max-h-full transition-[max-height] duration-500 overflow-hidden"
            >
              <summary className="outline-none cursor-pointer font-semibold marker:text-transparent group-open:before:rotate-90 before:origin-center relative before:w-[30px] before:h-[18px] before:transition-transform before:duration-200 before:-right-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
                <span className="relative rounded inline-flex text-sm py-2 px-2 mr-4 text-white bg-eucalyptus before:content-['Day'] before:pr-1">
                  <span className="-order-1">
                    <svg
                      aria-label="location pin icon"
                      className="w-4 h-5 fill-current"
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
                  </span>
                  <span className="absolute w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-eucalyptus -right-[6px] top-[10px]"></span>
                  {index + 1}
                </span>
                <span className="capitalize">{item.tour_title}</span>
              </summary>
              <hr className="my-2 scale-x-150" />
              <div className="text-sm -m-4 -mt-2 p-6 bg-gray-50">
                <div className="prose max-w-none">
                  <ReactMarkdown>{item.tour_details}</ReactMarkdown>
                </div>
              </div>
            </details>
          ))}
          <BookingForm title={tourdetail.title} />
        </div>
      </Wrapper>
    </>
  );
};

export default TourDetails;
