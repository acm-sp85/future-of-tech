import React from "react";

function StatsSustainableTech() {
  return (
    <div className="scrollbar-hide m-6 grid grid-cols-2 gap-4 p-2 lg:h-[100vh] lg:overflow-y-scroll">
      <div className="h-[100%] w-[100%]">
        <div className="relative mx-auto h-[490px] w-[100%]">
          <div className="shadow-outline mx-auto flex min-h-[300px] w-[100%] items-end rounded-3xl ring-2 ring-blue lg:min-h-[490px]">
            <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-blue lg:border-2"></div>
            <p className="h6-style m-10">
              <u>Energy efficiency:</u> Technologies that reduce energy
              consumption, such as LED lighting and smart appliances.
            </p>
          </div>
        </div>
        <div className="relative mx-auto mt-[19px] h-[490px] w-[100%]">
          <div className="shadow-outline mx-auto flex min-h-[300px] w-[100%] items-end rounded-3xl ring-2 ring-red lg:min-h-[490px]">
            <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-red lg:border-2"></div>
            <p className="h6-style m-10">
              <u>Electric vehicles:</u> Vehicles powered by electricity rather
              than fossil fuels.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1000px] w-[100%]">
        <div className="shadow-outline relative mx-auto flex min-h-[300px] w-[100%] items-end rounded-3xl ring-2 ring-yellow lg:min-h-[1000px]">
          <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-yellow lg:border-2"></div>
          <p className="h6-style m-10">
            <u>Renewable energy:</u> its sources are derived from natural
            processes that are constantly replenished, making them a sustainable
            alternative to fossil fuels. These sources include: Solar, wind,
            hydro, geothermal, and biomass power.
          </p>
        </div>
      </div>
      <div className="relative col-span-2 h-[300px] w-[100%]">
        <div className="shadow-outline mx-auto flex min-h-[300px] w-[100%] items-end rounded-3xl ring-2 ring-green lg:min-h-[300px]">
          <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-green lg:border-2"></div>
          <p className="h6-style m-10">
            <u>Sustainable materials:</u> Biodegradable materials, recycled
            materials, and materials with low environmental impact.
          </p>
        </div>
      </div>

      <div className="relative col-span-1 mx-auto h-[600px] w-[100%]">
        <div className="shadow-outline mx-auto flex min-h-[300px] w-[100%] items-end rounded-3xl ring-2 ring-yellow lg:min-h-[600px]">
          <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-yellow lg:border-2"></div>
          <p className="h6-style m-10">
            <u>Waste reduction and recycling:</u> Technologies that minimize
            waste generation and maximize recycling efforts.
          </p>
        </div>
      </div>
      <div className="relative col-span-1 mx-auto h-[600px] w-[100%]">
        <div className="shadow-outline relative mx-auto flex min-h-[300px] w-[100%] items-end rounded-3xl ring-2 ring-blue lg:min-h-[600px]">
          <div className="absolute right-0 top-0 m-4 h-16 w-16 rounded-full border-blue lg:border-2"></div>
          <p className="h6-style m-10">
            <u>Water conservation:</u> Technologies that reduce water
            consumption and pollution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatsSustainableTech;
