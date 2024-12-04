import Image from "next/image";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [modal, setModal] = useState(false);

  const triggerModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setModal(false);
      }
    };


    document.addEventListener("keydown", handleKeyDown);


    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full">
      {modal && (
        <div className="modal z-0">
          <p className="h6-style w-[30vw]">
            Thank you for your interest in The Report, this is just a sample
            website designed as an exercise by Alex Contell. If you want to
            learn more about his work, please visit <br />
            <a
              href="http://www.alexcontell.dev "
              target="_blank"
              className="text-red"
            >
              www.alexcontell.dev
            </a>
          </p>
        </div>
      )}
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
          <button
            className="h11-style flex h-8 items-center justify-center rounded-2xl bg-red px-5"
            onClick={triggerModal}
          >
            Download The Report
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
