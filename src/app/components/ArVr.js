import ArVrImage from "./ArVrImage";
import ProgressBarHorizontal from "./ProgressBarHorizontal";
import ProgressBarVertical from "./ProgressBarVertical";
function ArVr() {
  return (
    <div className="w-full" id="ar">
      <div className="flex h-[150px] w-full items-center justify-center md:justify-start">
        <p className="h3-style mt-8 w-full text-center md:ml-8 md:mt-24 md:text-left">
          AR & VR
        </p>
      </div>

      <div className="grid h-[300px] w-full grid-cols-1 md:flex md:grid-cols-2">
        <div className="md:h-full md:w-[50vw]">
          <p className="p-style m-6 md:ml-24 md:mr-24 md:mt-24">
            <b> Augmented Reality (AR)</b> overlays digital information on the
            real world, enhancing our perception of reality. AR applications
            range from gaming and education to retail and industrial
            applications.
          </p>
        </div>
        <div className="md:h-full md:w-[50vw]">
          <p className="p-style m-6 md:ml-24 md:mr-24 md:mt-24">
            <b>Virtual Reality (VR)</b> immerses users in a completely digital
            environment. It requires specialized headsets that display a
            360-degree view of the virtual world. VR is commonly used for
            gaming, entertainment, training, and simulations.
          </p>
        </div>
      </div>

      <div className="h-[50vh] grid-cols-1 md:hidden md:grid-cols-2">
        <ArVrImage />

        <div className="h-full items-center justify-center md:w-[50%]">
          <div className="hidden h-[1px] w-2 bg-red md:block md:translate-x-[275px] md:translate-y-[92px]"></div>
          <div className="flex">
            <p className="h8-style mx-auto mt-20 w-[90%] bg-darkGrey text-center md:w-[300px] md:translate-x-[50px] md:text-justify">
              AR market: Projected to reach $198 billion by 2028, according to
              Grand View Research.
            </p>
          </div>

          <div className="flex">
            <div className="hidden h-[1px] w-2 bg-red md:block md:translate-x-[275px] md:translate-y-[92px]"></div>
            <p className="h8-style mx-auto mt-20 w-[90%] bg-darkGrey text-center md:w-[300px] md:translate-x-[50px] md:text-justify">
              VR market: Estimated to grow at a CAGR of 44.1% from 2022 to 2030,
              according to Allied Market Research.
            </p>
          </div>
          <div className="flex">
            <div className="hidden h-[1px] w-2 bg-red md:block md:translate-x-[275px] md:translate-y-[92px]"></div>
            <p className="h8-style mx-auto mt-20 w-[90%] bg-darkGrey text-center md:w-[300px] md:translate-x-[50px] md:text-justify">
              AR/VR adoption: The gaming industry is the largest adopter of
              AR/VR technologies, followed by healthcare and education.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden h-[50vh] grid-cols-1 md:flex md:grid-cols-2">
        <ArVrImage />
        <div className="h-full items-center justify-center md:w-[50vh]">
          <ul>
            <li className="h8-style mx-auto mt-20 w-[90%] text-center md:w-[300px] md:translate-x-[50px] md:text-justify">
              AR market: Projected to reach $198 billion by 2028, according to
              Grand View Research.
            </li>

            <li className="h8-style mx-auto mt-20 w-[90%] text-center md:w-[300px] md:translate-x-[50px] md:text-justify">
              VR market: Estimated to grow at a CAGR of 44.1% from 2022 to 2030,
              according to Allied Market Research.
            </li>

            <li className="h8-style mx-auto mt-20 w-[90%] text-center md:w-[300px] md:translate-x-[50px] md:text-justify">
              AR/VR adoption: The gaming industry is the largest adopter of
              AR/VR technologies, followed by healthcare and education.
            </li>
          </ul>
        </div>
      </div>
      <div class="grid-pattern w-full] mt-[100px] h-[1233px] justify-center">
        <div className="hidden md:flex">
          <ProgressBarHorizontal />
        </div>
        <div className="md:hidden">
          <ProgressBarVertical />
        </div>
      </div>
    </div>
  );
}

export default ArVr;
