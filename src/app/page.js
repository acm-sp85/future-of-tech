"use client";
import Image from "next/image";
import PieChart from "./PieChart";
import Chart from "./Chart";

export default function Home() {
  return (
    <div className="bg-darkGrey">
      {/* NAV BAR */}
      <nav className="sticky top-5 z-50 flex w-full">
        <div className="ml-5 flex h-8 w-[15%] items-center text-white">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </div>
        <div className="justify-left flex h-8 w-[70%] items-center justify-between">
          <a className="h8-style" href="#ai">
            Artificial Intelligence
          </a>
          <a className="h8-style" href="#ar">
            AR & VR
          </a>
          <a className="h8-style" href="#block-chain">
            Block Chain
          </a>
          <a className="h8-style" href="#bio-tech">
            Bio-Tech
          </a>
          <a className="h8-style" href="#sustainable">
            Sustainable Tech
          </a>
        </div>
        <div className="mr-5 flex w-[15%] justify-end">
          <button className="h11-style flex h-8 items-center justify-center rounded-2xl bg-red px-5">
            Download The Report
          </button>
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
      <div className="flex w-full" id="ai">
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
        <div className="h-[100vh] w-[1px]"></div>
        <div className="p-style scrollbar-hide ml-auto h-[100vh] w-[50vw] overflow-y-scroll">
          <div className="mx-auto h-[100%] w-[60%] items-center justify-center opacity-70">
            <div className="h-[56%] rounded-lg p-8">
              <PieChart />
            </div>
            <p className="h11-style text-center">
              87% of organizations are currently using AI or exploring its
              applications, according to McKinsey.
            </p>
            <div className="mt-40 h-[46%] rounded-lg p-8">
              <Chart />
            </div>
            <p className="h11-style text-center">
              Projected to reach $1,597.5 billion by 2030, according to
              MarketsandMarkets.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-yellow"> </div>
      <div className="mt-1 h-[1px] w-full bg-blue"> </div>

      <div className="h-[2500px] w-full" id="ar">
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
      <div className="flex w-full" id="block-chain">
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
        <p className="h6-style m-10">
          It’s a game-changer. It's revolutionizing the way we think about
          medicine, agriculture, and even energy. But with great power comes
          great responsibility. We must ensure that biotechnology is used
          ethically and sustainably.{" "}
        </p>
        <p className="p-style flex justify-end">Bill Gates</p>
      </div>
      <div className="h-[1px] w-full bg-yellow"> </div>
      <div className="flex w-full snap-center" id="bio-tech">
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
              The personalized medicine market is estimated to reach $252
              billion by 2027{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-green"> </div>

      <div className="dot-pattern w-full] flex h-[1233px] flex-col justify-center">
        <div className="shadow-outline mx-auto flex h-[33%] w-[55%] items-center rounded-3xl bg-background ring-2 ring-green">
          <p className="h3-style mx-auto w-[40%] text-center">
            Sustainable Technology
          </p>
        </div>
      </div>
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
        {/* GRID */}
        <div className="scrollbar-hide m-6 grid h-[100vh] w-[50%] grid-cols-2 gap-4 overflow-y-scroll p-2">
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
                  <u>Electric vehicles:</u> Vehicles powered by electricity
                  rather than fossil fuels.
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
      <div className="h-[1px] w-[100vw] bg-blue"></div>
      <div className="bottom-0 items-end">
        <div className="justify-left mx-auto mt-[20px] flex h-8 w-[70%] items-center justify-between">
          <a className="h8-style" href="#ai">
            Artificial Intelligence
          </a>
          <a className="h8-style" href="#ar">
            AR & VR
          </a>
          <a className="h8-style" href="#block-chain">
            Block Chain
          </a>
          <a className="h8-style" href="#bio-tech">
            Bio-Tech
          </a>
          <a className="h8-style" href="#sustainable">
            Sustainable Tech
          </a>
        </div>
        <div className="mx-auto mt-[30px] flex h-8 w-[15%] items-center justify-center">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </div>
        <p className="h11-style mx-auto mt-[20px] w-[50%] justify-center text-center">
          Disclaimer: This website is a portfolio project created to showcase
          skills and knowledge in web development. While it has been hard coded
          by a human, Alex Contell, the content has been generated using
          artificial intelligence tools and may not be entirely original or
          comprehensive. While we have strived to ensure the accuracy and
          reliability of the information presented, it is important to verify
          the content from other sources before making any decisions or taking
          any actions based on it. This website is not intended to provide
          professional advice or recommendations. If you require expert guidance
          or assistance, please consult with a qualified professional.
        </p>
      </div>
    </div>
  );
}
