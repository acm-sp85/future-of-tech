import Image from "next/image";

function BioTech() {
  return (
    <div className="flex w-full snap-center" id="bio-tech">
      <div className="h-[100vh] w-[50vw]">
        <p className="h3-style ml-8 mt-24">Biotechnology</p>
        <p className="p-style ml-24 mr-24 mt-24">
          Biotechnology is the application of biological processes to solve
          problems and create new products. It involves the use of living
          organisms or their parts to develop products such as medicines,
          vaccines, and genetically modified organisms. Biotechnology has a wide
          range of applications in fields like healthcare, agriculture, and
          environmental science.
        </p>
        <div className="mr-24 mt-24 flex justify-center opacity-70">
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
      <div className="h-[100vh] w-[1px] bg-red"></div>
      <div className="p-style scrollbar-hide ml-auto h-[100vh] w-[50%] snap-y justify-center overflow-y-scroll">
        <div className="shadow-outline mx-auto mb-10 mt-1 flex h-[700px] w-[700px] snap-center items-end rounded-3xl ring-2 ring-blue">
          <p className="h4-style mb-[50px] ml-12 w-[80%] leading-[80px]">
            Projected to reach $842.8 billion by 2028
          </p>
        </div>
        <div className="shadow-outline mx-auto mb-10 mt-1 flex h-[700px] w-[700px] snap-center flex-col rounded-3xl ring-2 ring-blue">
          <p className="h4-style -mb-[300px] ml-12 mt-auto w-[80%] leading-[80px]">
            Gene editing: CRISPR to grow
          </p>
          <p className="hx-style mb-[100px] ml-12 mt-auto leading-[80px]">
            21.7%
          </p>
        </div>

        <div className="shadow-outline mx-auto mb-10 mt-1 flex h-[700px] w-[700px] snap-center items-end rounded-3xl ring-2 ring-blue">
          <p className="h4-style mb-[50px] ml-12 w-[80%] leading-[80px]">
            The personalized medicine market is estimated to reach $252 billion
            by 2027{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BioTech;
