import Image from "next/image";
import BioTechStats from "./BioTechStats";

function BioTech() {
  return (
    <div
      className="grid h-auto w-[100vw] grid-cols-1 md:h-[100vh] md:grid-cols-2"
      id="bio-tech"
    >
      <div className="md:h-[100vh] md:w-[50vw]">
        <div className="relative mr-24 mt-24 flex h-[80vh] w-[100vw] justify-center opacity-70 md:hidden">
          <Image
            src="/ink-drawing-of-biotechnology.png"
            alt="robot-L"
            class="absolute bottom-0 left-4 h-32 w-auto"
            width={100}
            height={100}
          />

          <Image
            src="/ink-drawing-of-a-microscope.png"
            alt="microscope"
            class="my-auto h-64 w-auto object-contain"
            width={300}
            height={300}
          />
          <Image
            src="/a-three-tone-drawing-of-a-dna-sequence-.png"
            alt="DNA"
            class="absolute right-4 ml-5 h-[150px] w-auto rotate-90 scale-x-[-1] object-contain"
            width={100}
            height={100}
          />
        </div>
        <p className="h3-style mx-auto mt-24 w-max md:ml-8">Biotechnology</p>
        <p className="p-style m-6 text-justify md:ml-24 md:mr-24 md:mt-24 mb-20">
          Biotechnology is the application of biological processes to solve
          problems and create new products. It involves the use of living
          organisms or their parts to develop products such as medicines,
          vaccines, and genetically modified organisms. Biotechnology has a wide
          range of applications in fields like healthcare, agriculture, and
          environmental science.
        </p>
        <div className="mr-24 mt-24 hidden justify-center opacity-70 md:flex">
          <Image
            src="/ink-drawing-of-biotechnology.png"
            alt="robot-L"
            class="mt-[150px] h-32 w-auto -translate-y-[150px]"
            width={100}
            height={100}
          />

          <Image
            src="/ink-drawing-of-a-microscope.png"
            alt="middle-image"
            class="h-64 w-auto object-contain"
            width={300}
            height={300}
          />
          <Image
            src="/a-three-tone-drawing-of-a-dna-sequence-.png"
            alt="robot-R"
            class="ml-5 h-[150px] w-auto -translate-x-[60px] translate-y-40 rotate-90 scale-x-[-1] object-contain"
            width={100}
            height={100}
          />
        </div>
      </div>
      {/* <div className="h-[100vh] w-[1px] bg-red"></div> */}
      <div className="md:w-[50vw]">
        <BioTechStats />
      </div>
    </div>
  );
}

export default BioTech;
