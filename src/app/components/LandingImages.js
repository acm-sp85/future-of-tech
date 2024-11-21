import Image from "next/image";

function LandingImages() {
  return (
    <div className="mx-auto mt-[100px] flex w-[50vw] items-end justify-center opacity-80 lg:mt-[100px] lg:w-full">
      <Image
        src="/a-drawing-of-a-futuristic-building-(white).png"
        alt="building-L"
        layout="responsive"
        width={100}
        height={100}
      />
      <Image
        src="/a-drawing-of-an-electric-vehicle-with-no-background-(green).png"
        className="translate-y-20"
        alt="car"
        layout="responsive"
        width={100}
        height={100}
      />
      <Image
        src="/a-drawing-of-a-futuristic-building-(whiteR).png"
        alt="building-R"
        layout="responsive"
        width={100}
        height={100}
      />
    </div>
  );
}

export default LandingImages;
