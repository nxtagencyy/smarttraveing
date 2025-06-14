import Image from "next/image";
import Wrapper from "./Wrapper";

const serviceData = [
  {
    id: 1,
    img: "/value-for-money.png",
    name: "value for money",
    desc: "We care about value for money so we provide best facilities and affordable prices.",
  },
  {
    id: 2,
    img: "/beautiful-places.png",
    name: "beautiful places",
    desc: "Now explore beauty of this planet by travelling with us.",
  },
  {
    id: 3,
    img: "/customizable.png",
    name: "100% customizable",
    desc: "Let your local host tailor the tourcompletely to your wishes.",
  },
];

const TourService = () => {
  return (
    <Wrapper>
      <div className="pt-10">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          {serviceData.map((item,index) => (
            <div key={index} className="sm:w-1/3 flex flex-col select-none">
              <Image
                src={item.img}
                alt={item.name}
                width={150}
                height={150}
                className="w-20"
              />
              <div className="text-lg capitalize text-eucalyptus">
                {item.name}
              </div>
              <p className="mt-2 tracking-normal">
               {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default TourService;
