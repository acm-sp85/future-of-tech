import Image from "next/image";
import PieChart from "../PieChart";
import Chart from "../Chart";

function ArtificialIntelligence() {
  return (
    <div className="flex w-full" id="ai">
      <div className="h-[100vh] w-[50vw]">
        <p className="h3-style ml-8 mt-24">Artificial Intelligence (AI)</p>
        <p className="p-style ml-24 mr-24 mt-24">
          AI is the simulation of human intelligence in machines, programmed to
          think and learn like humans. It encompasses a wide range of
          capabilities, including understanding natural language, recognizing
          patterns, solving problems, and making decisions. AI is used in
          various applications, such as virtual assistants, self-driving cars,
          medical diagnostics, and financial analysis. As AI technology
          continues to advance, it has the potential to revolutionize industries
          and transform our daily lives.
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
  );
}

export default ArtificialIntelligence;
