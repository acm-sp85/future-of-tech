function StatsBlockChain() {
  return (
    <div className="p-style scrollbar-hide ml-auto flex flex-col justify-center md:h-[100vh] md:w-[50vw] md:overflow-y-scroll mb-20">
      <div className="mx-auto flex h-[80%] w-[80%] flex-col justify-center">
        <div className="mt-16 flex h-[20%] flex-col bg-darkGrey">
          <div className="flex translate-y-[50px] justify-end md:translate-y-[30px]">
            <p className="h1regular-style">30</p>
            <p className="h4-style md:translate-y-[20px]">%</p>
          </div>
          <p className="h11-style md:h9-style translate-y-[30px]">
            EMERGING USE CASES
          </p>
          <div className="mx-auto mt-6 h-[1px] w-[100%] -translate-y-[0px] bg-offWhite"></div>
          <div className="relative mt-0 flex bg-blue">
            <div className="triangle-green absolute left-[30%]"></div>
          </div>
        </div>
        <div className="mt-16 flex h-[20%] flex-col bg-darkGrey">
          <div className="flex translate-y-[50px] justify-end md:translate-y-[30px]">
            <p className="h1regular-style">25</p>
            <p className="h4-style md:translate-y-[20px]">%</p>
          </div>
          <p className="h11-style md:h9-style translate-y-[30px]">
            FINANCIAL SERVICES
          </p>
          <div className="mx-auto mt-6 h-[1px] w-[100%] -translate-y-[0px] bg-offWhite"></div>
          <div className="relative mt-0 flex bg-blue">
            <div className="triangle-yellow absolute left-[25%]"></div>
          </div>
        </div>
        <div className="mt-16 flex h-[20%] flex-col bg-darkGrey">
          <div className="flex translate-y-[50px] justify-end md:translate-y-[30px]">
            <p className="h1regular-style">25</p>
            <p className="h4-style md:translate-y-[20px]">%</p>
          </div>
          <p className="h11-style md:h9-style translate-y-[30px]">
            SUPPLY CHAIN AND LOGISTICS
          </p>
          <div className="mx-auto mt-6 h-[1px] w-[100%] -translate-y-[0px] bg-offWhite"></div>
          <div className="relative mt-0 flex bg-blue">
            <div className="triangle-blue absolute left-[25%]"></div>
          </div>
        </div>
        <div className="mt-16 flex h-[20%] flex-col bg-darkGrey">
          <div className="flex translate-y-[50px] justify-end md:translate-y-[30px]">
            <p className="h1regular-style">20</p>
            <p className="h4-style md:translate-y-[20px]">%</p>
          </div>
          <p className="h11-style md:h9-style translate-y-[30px]">
            GOVERNMENT AND PUBLIC SERVICES
          </p>
          <div className="mx-auto mt-6 h-[1px] w-[100%] -translate-y-[0px] bg-offWhite"></div>
          <div className="relative mt-0 flex bg-blue">
            <div className="triangle-red absolute left-[20%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsBlockChain;
