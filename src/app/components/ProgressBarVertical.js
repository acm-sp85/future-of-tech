function ProgressBarVertical() {
  return (
    <div className="translate-y-[500px] lg:mt-0">
      <div className="shadow-outline bg-grey mx-auto h-[70vh] w-[20vw] bg-darkGrey p-1 ring-2 ring-green">
        <div className="h-[202px] w-full bg-green">
          <div className="mx-auto flex h-[69vh] w-[18vw] flex-col justify-between p-1">
            <p className="h9-style break-words text-center">AI</p>
            <p className="h9-style break-words text-center">
              <b>AR/VR</b>
            </p>
            <p className="h9-style break-words text-center">BLOCK CHAIN</p>
            <p className="h9-style break-words text-center">BIO-TECH</p>
            <p className="h9-style break-words text-center">SUSTAINABLE TECH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBarVertical;
