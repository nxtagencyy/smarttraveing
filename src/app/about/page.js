import Wrapper from "@/components/Wrapper";
import Image from "next/image";

const page = () => {
  return (
    <Wrapper>
      <div className="py-16">
        <div>
          <h2 className="text-3xl font-semibold lg:text-4xl text-center">
            About Us
          </h2>
          <p className="mt-5 md:text-lg">
            Welcome your gateway to unforgettable travel
            experiences. Established in September 2022 and headquartered in the
            enchanting city of Jaipur, we are a passionate team of travel
            enthusiasts dedicated to curating exceptional holidays for you. Our
            journey began with a simple mission: to turn your travel dreams into
            cherished memories.
          </p>
        </div>
        <div className="py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 text-3xl font-semibold tracking-tight lg:text-4xl sm:leading-none">
                  Our Vision
                </h2>
                <p className="mt-5 md:text-lg">
                  Our vision is to redefine the way you
                  experience the world. We believe that travel is not just about
                  visiting destinations; it&apos;s about immersing yourself in new
                  cultures, savouring local flavours, and creating stories that
                  last a lifetime. With this vision in mind, we meticulously
                  craft every itinerary to offer you a unique and authentic
                  adventure.
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
                  alt="about1"
                />
                <Image
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="/goa-slide.webp"
                  width={400}
                  height={400}
                  alt="about3"
                />
              </div>
              <div className="px-3">
                <Image
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="/rajasthan-slide.webp"
                  width={400}
                  height={400}
                  alt="about2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <h2 className="text-3xl font-semibold lg:text-4xl text-center">
            What Sets Us Apart?
          </h2>
          <div className="py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-blue-100 p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                  <path d="M16.5 9.4 7.55 4.24" />
                  <path d="M12 12v10M3.29 7 12 12 3.29 7zM12 12l8.71-5L12 12z" />
                  <circle cx="18.5" cy="15.5" r="2.5" />
                  <path d="M20.27 17.27 22 19" />
                </svg>

                <h3 className="mt-4 text-xl font-semibold">
                  Tailor-Made Packages
                </h3>
                <p className="mt-2">
                  We understand that no two travellers are the same. That&apos;s why
                  we specialize in crafting tailor-made packages that suit your
                  preferences, ensuring your journey is as unique as you are.
                </p>
              </div>
              <div className="bg-blue-100 p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 320 512"
                >
                  <path d="M.0022 64C.0022 46.33 14.33 32 32 32H288C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H231.8C241.4 110.4 248.5 126.6 252.4 144H288C305.7 144 320 158.3 320 176C320 193.7 305.7 208 288 208H252.4C239.2 266.3 190.5 311.2 130.3 318.9L274.6 421.1C288.1 432.2 292.3 452.2 282 466.6C271.8 480.1 251.8 484.3 237.4 474L13.4 314C2.083 305.1-2.716 291.5 1.529 278.2C5.774 264.1 18.09 256 32 256H112C144.8 256 173 236.3 185.3 208H32C14.33 208 .0022 193.7 .0022 176C.0022 158.3 14.33 144 32 144H185.3C173 115.7 144.8 96 112 96H32C14.33 96 .0022 81.67 .0022 64V64z" />
                </svg>

                <h3 className="mt-4 text-xl font-semibold">Best Rates</h3>
                <p className="mt-2">
                  Our extensive network and industry expertise enable us to
                  offer you the best rates without compromising on the quality
                  of your travel experience.
                </p>
              </div>
              <div className="bg-blue-100 p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z" />
                </svg>

                <h3 className="mt-4 text-xl font-semibold">
                  Exquisite Destinations
                </h3>
                <p className="mt-2">
                  Currently, we operate in some of the most captivating regions
                  in India, including Kashmir, Uttarakhand, Himachal Pradesh,
                  Rajasthan, and Goa. These destinations have been handpicked to
                  showcase the rich diversity and beauty that India has to
                  offer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col py-8">
          <h2 className="text-3xl font-semibold lg:text-4xl text-center">
            Our Commitment
          </h2>
          <div className="flex flex-col items-center pb-10 my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h3 className="py-4 text-xl font-semibold">
                Customer Satisfaction
              </h3>
              <p>
                Your satisfaction is our top priority. We go above and beyond to
                ensure that every aspect of your journey exceeds your
                expectations.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10 my-10 border-b border-gray-200 sm:flex-row">
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h3 className="py-4 text-xl font-semibold">
                Responsible Tourism
              </h3>
              <p>
                We are committed to sustainable and responsible tourism. Our
                itineraries are designed to minimize our impact on the
                environment and support local communities.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold lg:text-4xl text-center">
            Join Us on Your Next Adventure
          </h2>
          <p className="mt-5 md:text-lg">
            Travelwebsite is more than just a travel agency; we are your partners
            in exploration. Whether you seek the serenity of the Himalayas, the
            vibrant culture of Rajasthan, or the sun-kissed beaches of Goa, we
            have a journey that awaits you.
          </p>
          <p className="mt-5 md:text-lg">
            Come, let us turn your wanderlust into wander love. Contact us
            today, and together, we&apos;ll create memories that will last a lifetime
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
