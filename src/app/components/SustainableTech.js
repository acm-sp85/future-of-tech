import Image from "next/image";

function SustainableTech() {
  return (
    <div className="flex w-full" id="sustainable">
      <div className="h-[100vh] w-[50vw]">
        <p className="h3-style ml-8 mt-24"> Sustainable Technology</p>
        <p className="p-style ml-24 mr-24 mt-24">
          Sustainable Technology refers to the development and application of
          technologies that minimize environmental impact and promote
          sustainability. These technologies aim to address global challenges
          such as climate change, resource depletion, and pollution while
          meeting human needs and improving quality of life.
        </p>
        <div className="mr-24 mt-24 flex justify-center opacity-70">
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
      <div className="h-[100vh] w-[1px] bg-green"></div>

      <div
        className="scrollbar-hide m-6 grid h-[100vh] w-[50%] grid-cols-2 gap-4 overflow-y-scroll p-2"
      >
        <div className="h-[80%] w-[100%]">
          <div className="relative mx-auto h-[490px] w-[100%]">
            <div className="shadow-outline mx-auto flex h-[100%] w-[100%] items-end rounded-3xl ring-2 ring-blue">
              <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-2 border-blue"></div>
              <p className="h6-style m-10">
                <u>Energy efficiency:</u> Technologies that reduce energy
                consumption, such as LED lighting and smart appliances.
              </p>
            </div>
          </div>
          <div className="relative mx-auto mt-[19px] h-[490px] w-[100%]">
            <div className="shadow-outline mx-auto flex h-[100%] w-[100%] items-end rounded-3xl ring-2 ring-red">
              <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-2 border-red"></div>
              <p className="h6-style m-10">
                <u>Electric vehicles:</u> Vehicles powered by electricity rather
                than fossil fuels.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[1000px] w-[100%]">
          <div className="shadow-outline relative mx-auto flex h-[100%] w-[100%] items-end rounded-3xl ring-2 ring-yellow">
            <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-2 border-yellow"></div>
            <p className="h6-style m-10">
              <u>Renewable energy:</u> its sources are derived from natural
              processes that are constantly replenished, making them a
              sustainable alternative to fossil fuels. These sources include:
              Solar, wind, hydro, geothermal, and biomass power.
            </p>
          </div>
        </div>
        <div className="relative col-span-2 h-[300px] w-[100%]">
          <div className="shadow-outline mx-auto flex h-[100%] w-[100%] items-end rounded-3xl ring-2 ring-green">
            <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-2 border-green"></div>
            <p className="h6-style m-10">
              <u>Sustainable materials:</u> Biodegradable materials, recycled
              materials, and materials with low environmental impact.
            </p>
          </div>
        </div>

        <div className="relative col-span-1 mx-auto h-[600px] w-[100%]">
          <div className="shadow-outline mx-auto flex h-[100%] w-[100%] items-end rounded-3xl ring-2 ring-yellow">
            <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-2 border-yellow"></div>
            <p className="h6-style m-10">
              <u>Waste reduction and recycling:</u> Technologies that minimize
              waste generation and maximize recycling efforts.
            </p>
          </div>
        </div>
        <div className="relative col-span-1 mx-auto h-[600px] w-[100%]">
          <div className="shadow-outline relative mx-auto flex h-[100%] w-[100%] items-end rounded-3xl ring-2 ring-blue">
            <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-2 border-blue"></div>
            <p className="h6-style m-10">
              <u>Water conservation:</u> Technologies that reduce water
              consumption and pollution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainableTech;
