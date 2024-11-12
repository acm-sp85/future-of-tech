import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-[15000px] bg-darkGrey">
      {/* NAV BAR */}
      <nav className="sticky top-5 flex w-full">
        <div className="ml-5 flex h-8 w-[15%] items-center text-white">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </div>
        <div className="justify-left flex h-8 w-[70%] items-center">
          <div className="flex items-center justify-between">
            <span className="h8-style flex w-44 items-center justify-center">
              Artificial Intelligence
            </span>
            <span className="h8-style flex w-44 items-center justify-center">
              AR & VR
            </span>
            <span className="h8-style flex w-44 items-center justify-center">
              Block Chain
            </span>
            <span className="h8-style flex w-44 items-center justify-center">
              Bio-Tech
            </span>
            <span className="h8-style flex w-44 items-center justify-center">
              Sustainable Tech
            </span>
          </div>
        </div>
        <div className="mr-5 flex w-[15%] justify-end">
          <span className="h11-style flex h-8 items-center justify-center rounded-2xl bg-red px-5">
            Download The Report
          </span>
        </div>
      </nav>
      {/* LANDING IMAGES */}
      <div className="-mt-10 flex h-[60vh] w-full items-end justify-center">
        <div className="mb-10 flex h-[30vh] w-[50vw] items-end justify-center opacity-80">
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
      {/* GLOBAL IMPACT... */}
      <div className="flex h-[100vh] w-full flex-col justify-center">
        <p className="h2-style mb-[-15px] ml-8">Global Impact of</p>
        <p className="h2-style -mt-5 mb-[-15px] ml-8">Cutting-Edge Tech</p>
      </div>
      <div className="flex h-[1px] w-full bg-yellow"> </div>
      <div className="flex w-full">
        <div className="h-[100vh] w-[50vw]">
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
          <div className="mr-24 mt-24 flex justify-center opacity-70">
            <Image
              src="/an-ink-drawing-of-an-artificial-intelligence STAR.png"
              alt="star-L"
              class="mt-[150px] h-32 w-auto rotate-180"
              width={100}
              height={100}
            />

            <Image
              src="/ink-drawing-of-an-artificial-intelligence-assistant.png"
              alt="middle-image"
              class="h-128 w-auto object-contain"
              width={300}
              height={300}
            />
            <Image
              src="/an-ink-drawing-of-an-artificial-intelligence STAR.png"
              alt="star-R"
              class="ml-5 h-32 w-auto object-contain"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="h-[100vh] w-[1px] bg-red"></div>
        <div className="p-style scrollbar-hide ml-auto h-[100vh] w-[50vw] overflow-y-scroll">
          <Image
            src="/temp-graphics-01.png"
            alt="star-R"
            class="w-auto object-contain"
            width={10000}
            height={10000}
          />
        </div>
      </div>
      <div className="h-[2px] w-full bg-yellow"> </div>
      <div className="mt-1 h-[1px] w-full bg-blue"> </div>

      <div className="h-[2500px] w-full">
        <div className="flex h-[150px] w-full">
          <p className="h3-style ml-8 mt-24 w-full">AR & VR</p>
        </div>
        <div className="flex h-[300px] w-full">
          <div className="h-full w-[50vw]">
            <p className="p-style ml-24 mr-24 mt-24">
              <b> Augmented Reality (AR)</b> overlays digital information on the
              real world, enhancing our perception of reality. AR applications
              range from gaming and education to retail and industrial
              applications.
            </p>
          </div>
          <div className="h-full w-[50vw]">
            <p className="p-style ml-24 mr-24 mt-24">
              <b>Virtual Reality (VR)</b> immerses users in a completely digital
              environment. It requires specialized headsets that display a
              360-degree view of the virtual world. VR is commonly used for
              gaming, entertainment, training, and simulations.
            </p>
          </div>
        </div>
        <div className="flex h-[500px]">
          <div className="flex w-[60%] translate-x-[200px] translate-y-[100px] justify-center opacity-70">
            <Image
              src="/drawing-of-a-planet-with-no-background.png"
              alt="planet-top-left"
              class="h-[150px] w-auto translate-x-[100px]"
              width={100}
              height={100}
            />

            <Image
              src="/an-ink-drawing-of-the-solar-system.png"
              alt="solar-system"
              class="h-[450px] w-auto"
              width={200}
              height={200}
            />
            <Image
              src="/a-three-tone-drawing-of-a-woman-wearing-a-vr-headset-20164142.png"
              alt="girl-VR"
              class="h-[375px] w-auto -translate-x-[430px] -translate-y-[10px]"
              width={300}
              height={300}
            />
            <Image
              src="/a-drawing-of-a-futuristic-spaceship- (1).png"
              alt="spaceship-top-right"
              class="h-[200px] w-auto -translate-x-[450px] rotate-180"
              width={100}
              height={100}
            />
            <Image
              src="/drawing-of-a-planet-with-no-background (1).png"
              alt="planet-bottom-right"
              class="h-32 w-auto -translate-x-[670px] translate-y-[270px]"
              width={100}
              height={100}
            />
          </div>
          <div className="mt-20 w-[40%]">
            <div className="flex">
              <div className="h-[1px] w-2 -translate-x-[12px] translate-y-[92px] bg-red"></div>
              <p className="h8-style mt-20 w-[300px]">
                AR market: Projected to reach $198 billion by 2028, according to
                Grand View Research.
              </p>
            </div>
            <div className="flex">
              <div className="h-[1px] w-2 -translate-x-[12px] translate-y-[92px] bg-red"></div>
              <p className="h8-style mt-20 w-[300px]">
                VR market: Estimated to grow at a CAGR of 44.1% from 2022 to
                2030, according to Allied Market Research.
              </p>
            </div>
            <div className="flex">
              <div className="h-[1px] w-2 -translate-x-[12px] translate-y-[92px] bg-red"></div>
              <p className="h8-style mt-20 w-[300px]">
                AR/VR adoption: The gaming industry is the largest adopter of
                AR/VR technologies, followed by healthcare and education.
              </p>
            </div>
          </div>
        </div>
        <div class="grid-pattern w-full] h-[1233px] justify-center">
          {/* progress bar */}
          <div className="mt-80 translate-y-[670px]">
            <div className="shadow-outline bg-grey mx-auto h-[58px] w-[800px] bg-darkGrey ring-2 ring-green">
              <div className="m-1 h-[52px] w-[200px] translate-y-[3px] bg-green"></div>
            </div>
            <div className="mx-auto flex w-[804px] translate-y-1 justify-between">
              <div className="h-2 w-[2px] bg-green"></div>
              <div className="h-2 w-[2px] bg-green"></div>
              <div className="h-2 w-[2px] bg-green"></div>
              <div className="h-2 w-[2px] bg-green"></div>
              <div className="h-2 w-[2px] bg-green"></div>
            </div>
            <div className="mx-auto flex w-[1000px] translate-y-2 justify-between">
              <p className="h9-style translate-x-[90px]">AI</p>
              <p className="h9-style translate-x-[110px]">
                <b>AR/VR</b>
              </p>
              <p className="h9-style translate-x-[85px]">BLOCK CHAIN</p>
              <p className="h9-style translate-x-[50px]">BIO-TECH</p>
              <p className="h9-style -translate-x-[10px]">SUSTAINABLE TECH</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-yellow"> </div>
      <div className="flex w-full">
        <div className="h-[100vh] w-[50vw]">
          <p className="h3-style ml-8 mt-24">Block Chain</p>
          <p className="p-style ml-24 mr-24 mt-24">
            Blockchain is a decentralized, distributed ledger technology that
            records transactions in a secure and transparent manner. It consists
            of a chain of blocks, each containing a record of transactions. Once
            a block is added to the chain, it cannot be modified, ensuring data
            integrity and security.
          </p>
          <div className="mr-24 mt-24 flex justify-center opacity-70">
            <Image
              src="/an-ink-drawing-of-an-old-computer-clean-background-(1)-copy.png"
              alt="robot-L"
              class="mt-[150px] h-32 w-auto"
              width={100}
              height={100}
            />

            <Image
              src="/an-ink-drawing-of-the-blockchain-copy-02.png"
              alt="middle-image"
              class="h-128 w-auto object-contain"
              width={300}
              height={300}
            />
            <Image
              src="/an-ink-drawing-of-an-old-computer-clean-background-copy.png"
              alt="robot-R"
              class="ml-5 h-32 w-auto -translate-x-6 translate-y-40 scale-x-[-1] object-contain"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="h-[100vh] w-[1px] bg-green"></div>
        <div className="p-style scrollbar-hide ml-auto flex h-[100vh] w-[50vw] flex-col justify-center overflow-y-scroll">
          <div className="mx-auto flex h-[80%] w-[80%] flex-col justify-center">
            <div className="mt-16">
              <p className="h9-style translate-y-[10px]">EMERGING USE CASES</p>
              <div className="flex -translate-y-[70px] justify-end">
                <div className="triangle-green -translate-x-[300px] translate-y-[74px]"></div>
                <p className="h1regular-style">30</p>
                <p className="h4-style translate-y-[20px]">%</p>
              </div>
              <div className="mx-auto h-[1px] w-[100%] -translate-y-[40px] bg-offWhite"></div>
            </div>
            <div className="mt-16">
              <p className="h9-style translate-y-[10px]">FINANCIAL SERVICES</p>
              <div className="flex -translate-y-[70px] justify-end">
                <div className="triangle-yellow -translate-x-[350px] translate-y-[74px]"></div>
                <p className="h1regular-style">25</p>
                <p className="h4-style translate-y-[20px]">%</p>
              </div>
              <div className="mx-auto h-[1px] w-[100%] -translate-y-[40px] bg-offWhite"></div>
            </div>
            <div className="mt-16">
              <p className="h9-style translate-y-[10px]">
                SUPPLY CHAIN AND LOGISTICS
              </p>
              <div className="flex -translate-y-[70px] justify-end">
                <div className="triangle-blue -translate-x-[350px] translate-y-[74px]"></div>
                <p className="h1regular-style">25</p>
                <p className="h4-style translate-y-[20px]">%</p>
              </div>
              <div className="mx-auto h-[1px] w-[100%] -translate-y-[40px] bg-offWhite"></div>
            </div>
            <div className="mt-16">
              <p className="h9-style translate-y-[10px]">
                GOVERNMENT AND PUBLIC SERVICES
              </p>
              <div className="flex -translate-y-[70px] justify-end">
                <div className="triangle-red -translate-x-[400px] translate-y-[74px]"></div>
                <p className="h1regular-style">20</p>
                <p className="h4-style translate-y-[20px]">%</p>
              </div>
              <div className="mx-auto h-[1px] w-[100%] -translate-y-[40px] bg-offWhite"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[3px] w-full bg-yellow"> </div>
      <div className="mt-2 h-[2px] w-full bg-green"> </div>
      <div className="mt-3 h-[1px] w-full bg-red"> </div>
      <div className="mt-4 h-[1px] w-full bg-blue"> </div>
      <div className="mx-auto flex h-[100vh] w-[60%] flex-col justify-center">
        <p className="h6-style">
          It’s a game-changer. It's revolutionizing the way we think about
          medicine, agriculture, and even energy. But with great power comes
          great responsibility. We must ensure that biotechnology is used
          ethically and sustainably.{" "}
        </p>
        <p className="p-style flex justify-end">Bill Gates</p>
      </div>
      <div className="h-[1px] w-full bg-yellow"> </div>
      <div className="flex w-full">
        <div className="h-[100vh] w-[50vw]">
          <p className="h3-style ml-8 mt-24">Biotechnology</p>
          <p className="p-style ml-24 mr-24 mt-24">
            Biotechnology is the application of biological processes to solve
            problems and create new products. It involves the use of living
            organisms or their parts to develop products such as medicines,
            vaccines, and genetically modified organisms. Biotechnology has a
            wide range of applications in fields like healthcare, agriculture,
            and environmental science.
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
        <div className="p-style scrollbar-hide ml-auto h-[100vh] w-[50%] justify-center overflow-y-scroll">
          <div className="shadow-outline mx-auto mb-10 mt-1 flex h-[700px] w-[700px] items-end rounded-3xl ring-2 ring-blue">
            <p className="h4-style mb-[50px] ml-12 w-[80%] leading-[80px]">
              Projected to reach $842.8 billion by 2028
            </p>
          </div>
          <div className="shadow-outline mx-auto mb-10 mt-1 flex h-[700px] w-[700px] flex-col rounded-3xl ring-2 ring-blue">
            <p className="h4-style -mb-[300px] ml-12 mt-auto w-[80%] leading-[80px]">
              Gene editing: CRISPR to grow
            </p>
            <p className="hx-style mb-[100px] ml-12 mt-auto leading-[80px]">
              21.7%
            </p>
          </div>

          <div className="shadow-outline mx-auto mb-10 mt-1 flex h-[700px] w-[700px] items-end rounded-3xl ring-2 ring-blue">
            {" "}
            <p className="h4-style mb-[50px] ml-12 w-[80%] leading-[80px]">
              The personalized medicine market is estimated to reach $252
              billion by 2027
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-green"> </div>
    </div>
  );
}
