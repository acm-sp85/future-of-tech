import Image from "next/image";
import StatsSustainableTech from "./StatsSustainableTech";

function SustainableTech() {
  return (
    <div
      className="mb-8 grid h-auto w-[100vw] grid-cols-1 lg:h-[100vh] lg:grid-cols-2"
      id="sustainable"
    >
      <div className="lg:h-[100vh] lg:w-[50vw]">
        <p className="h3-style mx-auto mt-24 w-max lg:ml-8">
          {" "}
          Sustainable Technology
        </p>
        <p className="p-style m-6 mb-20 text-justify lg:ml-24 lg:mr-24 lg:mt-24">
          Sustainable Technology refers to the development and application of
          technologies that minimize environmental impact and promote
          sustainability. These technologies aim to address global challenges
          such as climate change, resource depletion, and pollution while
          meeting human needs and improving quality of life.
        </p>
        <div className="mr-24 mt-24 hidden justify-center opacity-70 lg:flex">
          <Image
            src="/a-drawing-of-a-solar-pannel.png"
            alt="robot-L"
            class="mt-[150px] h-32 w-auto translate-y-[5px]"
            width={100}
            height={100}
          />

          <Image
            src="/a-drawing-of-a-wind-turbine-.png"
            alt="middle-image"
            class="h-120 w-auto -translate-y-[75px] object-contain"
            width={300}
            height={300}
          />
        </div>
      </div>
      {/* <div className="h-[100vh] w-[1px] bg-green"></div> */}

      <div className="lg:w-[50vw]">
        <StatsSustainableTech />
      </div>
    </div>
  );
}

export default SustainableTech;
