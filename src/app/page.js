import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-darkGrey  h-5000">
      <nav className="flex sticky top-5 w-full">
        <div className="w-[15%] h-8 flex items-center ml-5 text-white">
          <Image
            src="/logo.png" // Put your logo in the public folder
            alt="Logo"
            width={150} // Adjust size as needed
            height={150} // Adjust size as needed
            // priority // If this is above the fold
          />
        </div>
        <div className="w-[70%]  h-8 flex items-center justify-left">
          <div className="flex items-center justify-between">
            <span
              className=" h8-style w-44
        
          flex items-center justify-center"
            >
              Artificial Intelligence
            </span>
            <span
              className=" h8-style w-44
        
    flex items-center justify-center"
            >
              AR & VR
            </span>
            <span
              className=" h8-style w-44
        
         flex items-center justify-center"
            >
              Block Chain
            </span>
            <span
              className="  h8-style w-44
        
         flex items-center justify-center"
            >
              Bio-Tech
            </span>
            <span
              className=" h8-style w-44
        flex items-center justify-center"
            >
              Sustainable Tech
            </span>
          </div>
        </div>
        <div className="w-[15%] flex justify-end mr-5">
          <span className="h11-style bg-red rounded-2xl h-8 px-5 flex items-center justify-center ">
            Download The Report
          </span>
        </div>
      </nav>
    </div>
  );
}
