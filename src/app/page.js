import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-darkGrey  h-[7000px]">
      {/* NAV BAR */}
      <nav className="flex sticky top-5 w-full">
        <div className="w-[15%] h-8 flex items-center ml-5 text-white">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
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
      {/* LANDING IMAGES */}
      <div className="w-full h-[60vh] -mt-10 flex items-end justify-center">
        <div className="h-[30vh] w-[50vw]  mb-10 flex items-end justify-center opacity-80 ">
          <Image
            src="/a-drawing-of-a-futuristic-building-(white).png"
            alt="building-L"
            width={300}
            height={300}
          />
          <Image
            src="/a-drawing-of-an-electric-vehicle-with-no-background-(green).png"
            className="translate-y-10"
            alt="car"
            width={200}
            height={200}
          />
          <Image
            src="/a-drawing-of-a-futuristic-building-(whiteR).png"
            alt="building-R"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* THE FUTURE OF TECHNOLOGY */}
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
      {/* GLOBAL IMPACT... */}
      <div className="w-full h-[100vh] flex flex-col  justify-center">
        <p className="h2-style ml-8 mb-[-15px] ">Global Impact of</p>
        <p className="h2-style -mt-5 ml-8 mb-[-15px]">Cutting-Edge Tech</p>
      </div>
      <div className="bg-yellow w-full h-[1px]  flex"> </div>
      <div className="w-full  flex">
        <div className="w-[50vw] h-[100vh] ">
          <p className="h3-style ml-8 mt-24">Artificial Intelligence (AI)</p>
          <p className="p-style ml-24 mr-24 mt-24">
            AI is the simulation of human intelligence in machines, programmed
            to think and learn like humans. It encompasses a wide range of
            capabilities, including understanding natural language, recognizing
            patterns, solving problems, and making decisions. AI is used in
            various applications, such as virtual assistants, self-driving cars,
            medical diagnostics, and financial analysis. As AI technology
            continues to advance, it has the potential to revolutionize
            industries and transform our daily lives.
          </p>
          <div className=" flex  mt-24 mr-24 justify-center opacity-70 ">
            <Image
              src="/an-ink-drawing-of-an-artificial-intelligence STAR.png"
              alt="star-L"
              class="w-auto h-32 mt-[150px] rotate-180"
              width={100}
              height={100}
            />

            <Image
              src="/ink-drawing-of-an-artificial-intelligence-assistant.png"
              alt="middle-image"
              class="w-auto h-128 object-contain"
              width={300}
              height={300}
            />
            <Image
              src="/an-ink-drawing-of-an-artificial-intelligence STAR.png"
              alt="star-R"
              class="w-auto h-32 object-contain ml-5"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="  bg-red h-[100vh] w-[1px]"></div>
        <div className="w-[50vw] h-[100vh] p-style overflow-y-scroll scrollbar-hide  ml-auto">
          <Image
            src="/temp-graphics-01.png"
            alt="star-R"
            class="w-auto object-contain"
            width={10000}
            height={10000}
          />
        </div>
      </div>
      <div className="bg-yellow w-full h-[2px]  "> </div>
      <div className="bg-blue w-full h-[1px] mt-1 "> </div>

      <div className=" w-full h-[2500px] ">
        <div className=" w-full h-[150px] flex">
          <p className="h3-style ml-8 mt-24 w-full  ">AR & VR</p>
        </div>
        <div className=" w-full h-[300px] flex">
          <div className="w-[50vw] h-full ">
            <p className="p-style ml-24 mr-24 mt-24">
              <b> Augmented Reality (AR)</b> overlays digital information on the
              real world, enhancing our perception of reality. AR applications
              range from gaming and education to retail and industrial
              applications.
            </p>
          </div>
          <div className="w-[50vw] h-full ">
            <p className="p-style ml-24 mr-24 mt-24">
              <b>Virtual Reality (VR)</b> immerses users in a completely digital
              environment. It requires specialized headsets that display a
              360-degree view of the virtual world. VR is commonly used for
              gaming, entertainment, training, and simulations.
            </p>
          </div>
        </div>
        <div className=" h-[1000px] flex">
          <div className="  w-[60%] flex justify-center translate-x-[200px] translate-y-[100px] opacity-70">
            <Image
              src="/drawing-of-a-planet-with-no-background.png"
              alt="planet-top-left"
              class="w-auto h-[150px] translate-x-[100px]"
              width={100}
              height={100}
            />

            <Image
              src="/an-ink-drawing-of-the-solar-system.png"
              alt="solar-system"
              class="w-auto h-[450px]"
              width={200}
              height={200}
            />
            <Image
              src="/a-three-tone-drawing-of-a-woman-wearing-a-vr-headset-20164142.png"
              alt="girl-VR"
              class="w-auto h-[375px] -translate-x-[430px] -translate-y-[10px]"
              width={300}
              height={300}
            />
            <Image
              src="/a-drawing-of-a-futuristic-spaceship- (1).png"
              alt="spaceship-top-right"
              class="w-auto h-[200px] rotate-180 -translate-x-[450px]"
              width={100}
              height={100}
            />
            <Image
              src="/drawing-of-a-planet-with-no-background (1).png"
              alt="planet-bottom-right"
              class="w-auto h-32  -translate-x-[670px] translate-y-[270px]"
              width={100}
              height={100}
            />
          </div>
          <div className="  w-[40%] mt-20">
            <p className="h8-style w-[300px] mt-20">
              AR market: Projected to reach $198 billion by 2028, according to
              Grand View Research.
            </p>
            <p className="h8-style w-[300px] mt-20">
              VR market: Estimated to grow at a CAGR of 44.1% from 2022 to 2030,
              according to Allied Market Research.
            </p>
            <p className="h8-style w-[300px] mt-20">
              AR/VR adoption: The gaming industry is the largest adopter of
              AR/VR technologies, followed by healthcare and education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
