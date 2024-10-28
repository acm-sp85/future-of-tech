import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-darkGrey  h-5000">
      <nav className="flex sticky top-5 w-full">
        <div className="w-[15%] h-8 flex items-center ml-5 text-white">
          <Image
            src="/logo.png" // Put your logo in the public folder
            alt="Logo"
            width={150} // Adjust size as needed
            height={150} // Adjust size as needed
            // priority // If this is above the fold
          />
        </div>
        <div className="w-[70%]  h-8 flex items-center justify-left">
          <div className="flex items-center justify-between">
            <span
              className=" h8-style w-44
        
          flex items-center justify-center"
            >
              Artificial Intelligence
            </span>
            <span
              className=" h8-style w-44
        
    flex items-center justify-center"
            >
              AR & VR
            </span>
            <span
              className=" h8-style w-44
        
         flex items-center justify-center"
            >
              Block Chain
            </span>
            <span
              className="  h8-style w-44
        
         flex items-center justify-center"
            >
              Bio-Tech
            </span>
            <span
              className=" h8-style w-44
        flex items-center justify-center"
            >
              Sustainable Tech
            </span>
          </div>
        </div>
        <div className="w-[15%] flex justify-end mr-5">
          <span className="h11-style bg-red rounded-2xl h-8 px-5 flex items-center justify-center ">
            Download The Report
          </span>
        </div>
      </nav>
      <div className="w-full h-[60vh] -mt-10 flex items-end justify-center">
        <div className="h-[30vh] w-[50vw]  mb-10 flex items-end justify-center ">
          <Image
            src="/a-drawing-of-a-futuristic-building-(white).png"
            alt="building-L"
            width={300}
            height={300}
          />
          <Image
            src="/a-drawing-of-an-electric-vehicle-with-no-background-(green).png"
            alt="car"
            width={300}
            height={300}
          />
          <Image
            src="/a-drawing-of-a-futuristic-building-(whiteR).png"
            alt="building-R"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="w-full h-[40vh] flex flex-col ">
        <div className="w-full flex flex-col absolute bottom-0  ">
          <div className="bg-red w-full h-px"></div>
          <span className="h1-style ml-8 mb-[-15px]">The Future</span>
          <div className="bg-yellow w-full h-[2px] mb-[-15px]"></div>
          <span className="h1-style  ml-8 mb-[-15px]">of Technology</span>
          <div className="bg-blue w-full h-[3px]"></div>

          <p className="p-style absolute bottom-[-1px] right-5">
            {' '}
            &#8595; Scroll Down
          </p>
        </div>
      </div>
    </div>
  );
}
