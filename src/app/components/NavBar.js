import Image from "next/image";

const navBar = () => {
  return (
    <div className="w-full">
      <nav className="mt-4 flex">
        <div className="ml-5 flex h-8 w-[15%] items-center text-white">
          <a href="#">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </a>
        </div>
        <div className="justify-left flex h-8 w-[70%] items-center justify-between">
          <a className="h8-style sm:text-sm" href="#ai">
            Artificial Intelligence
          </a>
          <a className="h8-style sm:text-sm" href="#ar">
            AR & VR
          </a>
          <a className="h8-style sm:text-sm" href="#block-chain">
            Block Chain
          </a>
          <a className="h8-style sm:text-sm" href="#bio-tech">
            Bio-Tech
          </a>
          <a className="h8-style sm:text-sm" href="#sustainable">
            Sustainable Tech
          </a>
        </div>
        <div className="mr-5 flex w-[15%] justify-end">
          <button className="h11-style flex h-8 items-center justify-center rounded-2xl bg-red px-5">
            Download The Report
          </button>
        </div>
      </nav>
    </div>
  );
};

export default navBar;
