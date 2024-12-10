import Image from "next/image";
import PieChart from "../PieChart";
import Chart from "../Chart";

function ArtificialIntelligence() {
  return (
    <div
      className="grid h-auto w-[100vw] grid-cols-1 lg:h-[100vh] lg:grid-cols-2"
      id="ai"
    >
      <div className="relative lg:h-[100vh] lg:w-[50vw]">
        <p className="h3-style ml-8 mt-24">Artificial Intelligence (AI)</p>
        <p className="p-style bg-backgroundWithTransparency z-10 m-6 text-justify">
          AI is the simulation of human intelligence in machines, programmed to
          think and learn like humans. It encompasses a wide range of
          capabilities, including understanding natural language, recognizing
          patterns, solving problems, and making decisions. AI is used in
          various applications, such as virtual assistants, self-driving cars,
          medical diagnostics, and financial analysis. As AI technology
          continues to advance, it has the potential to revolutionize industries
          and transform our daily lives.
        </p>
        <div className="absolute bottom-10 left-10 z-0 hidden justify-center opacity-70 lg:flex">
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

      <div className="scrollbar-hide mt-[100px] lg:w-[50vw] lg:overflow-y-scroll">
        <div className="mx-auto flex w-full flex-col items-center justify-center opacity-70 lg:w-[50%]">
          <div className="flex h-[50vh] w-full justify-center lg:h-[56%]">
            <PieChart />
          </div>
          <p className="h11-style mt-10 text-center">
            87% of organizations are currently using AI or exploring its
            applications, according to McKinsey.
          </p>
          <div className="mt-40 flex h-[50vh] w-full justify-center lg:h-[46%]">
            <Chart />
          </div>
          <p className="h11-style mb-20 mt-10 text-center">
            Projected to reach $1,597.5 billion by 2030, according to
            MarketsandMarkets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArtificialIntelligence;
