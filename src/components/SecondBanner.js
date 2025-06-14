import Image from "next/image";

const SecondBanner = ({ img, alt, title }) => {
  return (
    <div className="relative">
      <Image
        src={img}
        alt={alt}
        width={3840}
        height={2160}
        className="w-full h-96 object-cover"
      />
      {title && (
        <div className="absolute inset-0 bg-black/25 grid content-center">
          <div className="text-center">
            <h1 className="text-xl lg:text-5xl font-bold text-white capitalize">
              {title}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondBanner;
