"use client";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { FaMapMarkedAlt, FaSmile, FaGlobeAsia } from "react-icons/fa";
import { MdCardTravel, MdEco, MdOutlineLocalOffer } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";

const page = () => {
  return (
    <Wrapper>
      <div className="py-16">
        <div>
          <h2 className="text-3xl font-semibold lg:text-4xl text-center">
            About Smart Travelling Smart
          </h2>
          <p className="mt-5 md:text-lg text-gray-700">
            Welcome to <strong>Smart Travelling Smart</strong> — your trusted
            travel partner for immersive, unforgettable journeys. Founded in{" "}
            <strong>2025</strong> in the vibrant town of{" "}
            <strong>Tumkur, Karnataka</strong>, our mission is simple: to turn
            your travel dreams into beautiful, lasting memories.
          </p>
        </div>

        {/* Vision Section */}
        <div className="py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="max-w-xl mb-6">
                <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight lg:text-4xl">
                  <HiOutlineLightBulb className="text-yellow-500" /> Our Vision
                </h2>
                <p className="mt-5 md:text-lg text-gray-700">
                  We aim to reshape how you discover the world. Travel
                  isn&apos;t just about places—it&apos;s about culture, flavor,
                  emotions, and the memories you create. Every itinerary we
                  craft is smart, soulful, and unforgettable.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <Image
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="/uttrakhand-slide.jpg"
                  width={400}
                  height={400}
                  alt="Uttarakhand"
                />
                <Image
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="/goa-slide.webp"
                  width={400}
                  height={400}
                  alt="Goa"
                />
              </div>
              <div className="px-3">
                <Image
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="/rajasthan-slide.webp"
                  width={400}
                  height={400}
                  alt="Rajasthan"
                />
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Us Smart */}
        <div className="py-5">
          <h2 className="text-3xl font-semibold lg:text-4xl text-center">
            What Makes Us Smart?
          </h2>
          <div className="py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
                <MdCardTravel className="text-3xl text-blue-600 mb-2" />
                <h3 className="mt-2 text-xl font-semibold">
                  Custom-Crafted Journeys
                </h3>
                <p className="mt-2 text-gray-700">
                  We create trips that align perfectly with your style, needs,
                  and pace—offering you a trip that feels uniquely yours.
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
                <MdOutlineLocalOffer className="text-3xl text-blue-600 mb-2" />
                <h3 className="mt-2 text-xl font-semibold">
                  Smart Value, Premium Feel
                </h3>
                <p className="mt-2 text-gray-700">
                  We deliver unforgettable experiences at unbeatable prices—so
                  you travel smart without compromise.
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
                <FaMapMarkedAlt className="text-3xl text-blue-600 mb-2" />
                <h3 className="mt-2 text-xl font-semibold">
                  Handpicked Indian Gems
                </h3>
                <p className="mt-2 text-gray-700">
                  We specialize in Kashmir, Uttarakhand, Himachal, Rajasthan,
                  and Goa—offering the best of India&apos;s charm.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitments */}
        <div className="py-8">
          <h2 className="text-3xl font-semibold lg:text-4xl text-center">
            Our Commitment to You
          </h2>
          <div className="flex flex-col items-center pb-10 my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
            <FaSmile className="text-4xl text-green-500 sm:mr-6" />
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h3 className="py-4 text-xl font-semibold">
                100% Customer Happiness
              </h3>
              <p className="text-gray-700">
                Your joy is our goal. Every moment of your journey is designed
                to be smooth, enriching, and unforgettable.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10 my-10 border-b border-gray-200 sm:flex-row">
            <MdEco className="text-4xl text-green-600 sm:mr-6" />
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h3 className="py-4 text-xl font-semibold">
                Sustainable & Local-First
              </h3>
              <p className="text-gray-700">
                We promote eco-conscious choices and support local communities
                to make a positive impact wherever we go.
              </p>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div>
          <h2 className="text-3xl font-semibold lg:text-4xl text-center">
            Let&apos;s Begin Your Smart Adventure
          </h2>
          <p className="mt-5 md:text-lg text-gray-700">
            From the peaceful valleys of the North to the colorful streets of
            the West, we&apos;ve got the perfect itinerary waiting for you.
          </p>
          <p className="mt-5 md:text-lg text-gray-700">
            So why wait? Let&apos;s turn your wanderlust into wander-love.
            Contact us today and let the smart journey begin.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
