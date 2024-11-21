import React from "react";

function TheFutureOfTechnology() {
  return (
    <div className="flex h-[40vh] w-full flex-col">
      <div className="absolute bottom-0 flex w-full flex-col">
        <div className="h-px w-full bg-red"></div>
        <span className="h1-style mb-[-15px] ml-8">The Future</span>
        <div className="mb-[-15px] h-[2px] w-full bg-yellow"></div>
        <span className="h1-style mb-[-15px] ml-8">of Technology</span>
        <div className="h-[3px] w-full bg-blue"></div>

        <p className="p-style absolute bottom-[-1px] right-5">
          {" "}
          &#8595; Scroll Down
        </p>
      </div>
    </div>
  );
}

export default TheFutureOfTechnology;
