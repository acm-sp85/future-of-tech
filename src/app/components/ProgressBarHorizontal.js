function ProgressBar() {
  return (
    <div className="mx-auto mt-10 translate-y-[670px] md:mt-0">
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
  );
}

export default ProgressBar;
