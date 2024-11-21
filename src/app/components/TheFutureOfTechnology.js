import React from "react";

function TheFutureOfTechnology() {
  return (
    <div className="flex h-[40%] w-full flex-col">
      <div className="absolute bottom-0 mb-32 flex w-full flex-col lg:mb-4">
        <span className="h1-style mb-2 ml-3 lg:ml-8">The Future</span>
        <div className="h-[2px] w-full translate-y-20 bg-yellow md:translate-y-0 lg:mb-[-15px]"></div>
        <span className="h1-style mb-2 ml-3 lg:ml-8">of Technology</span>
      </div>
      //{" "}
      <p className="p-style absolute bottom-[-1px] right-5">
        &#8595; Scroll Down
      </p>
    </div>
  );
}

export default TheFutureOfTechnology;

