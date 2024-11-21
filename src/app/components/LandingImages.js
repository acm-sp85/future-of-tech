import Image from "next/image";

function LandingImages() {
  return (
    <div className="indeterminate mt-[100px] flex w-full items-end justify-center opacity-80">
      <Image
        src="/a-drawing-of-a-futuristic-building-(white).png"
        alt="building-L"
        layout="responsive"
        width={300}
        height={300}
      />
      <Image
        src="/a-drawing-of-an-electric-vehicle-with-no-background-(green).png"
        className="translate-y-20"
        alt="car"
        layout="responsive"
        width={200}
        height={200}
      />
      <Image
        src="/a-drawing-of-a-futuristic-building-(whiteR).png"
        alt="building-R"
        layout="responsive"
        width={300}
        height={300}
      />
    </div>
  );
}

export default LandingImages;
