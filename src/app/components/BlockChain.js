import Image from "next/image";

function BlockChain() {
  return (
    <div className="flex w-full" id="block-chain">
      <div className="h-[100vh] w-[50vw]">
        <p className="h3-style ml-8 mt-24">Block Chain</p>
        <p className="p-style ml-24 mr-24 mt-24">
          Blockchain is a decentralized, distributed ledger technology that
          records transactions in a secure and transparent manner. It consists
          of a chain of blocks, each containing a record of transactions. Once a
          block is added to the chain, it cannot be modified, ensuring data
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
  );
}

export default BlockChain;
