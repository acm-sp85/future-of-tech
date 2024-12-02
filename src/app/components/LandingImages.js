import Image from "next/image";

function LandingImages() {
  return (
    <div className="mx-auto mt-[100px] flex flex-wrap items-end justify-center lg:mt-[100px] lg:w-full lg:flex-nowrap">
      <div className="w-1/3 max-w-full p-2">
        <Image
          src="/a-drawing-of-a-futuristic-building-(white).png"
          alt="building-L"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div className="w-1/3 max-w-full translate-y-20 p-2">
        <Image
          src="/a-drawing-of-an-electric-vehicle-with-no-background-(green).png"
          alt="car"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div className="w-1/3 max-w-full p-2">
        <Image
          src="/a-drawing-of-a-futuristic-building-(whiteR).png"
          alt="building-R"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default LandingImages;
