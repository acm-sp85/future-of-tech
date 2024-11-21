import Image from "next/image";
function ArVr() {
  return (
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
              VR market: Estimated to grow at a CAGR of 44.1% from 2022 to 2030,
              according to Allied Market Research.
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
  );
}

export default ArVr;
