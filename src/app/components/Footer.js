import Image from "next/image";

function Footer() {
  return (
    <div className="bottom-0 items-end">
      <div className="justify-left mx-auto mt-[20px] md:flex h-8 w-[70%] items-center justify-between hidden">
        <a className="h8-style" href="#ai">
          Artificial Intelligence
        </a>
        <a className="h8-style" href="#ar">
          AR & VR
        </a>
        <a className="h8-style" href="#block-chain">
          Block Chain
        </a>
        <a className="h8-style" href="#bio-tech">
          Bio-Tech
        </a>
        <a className="h8-style" href="#sustainable">
          Sustainable Tech
        </a>
      </div>
      <div className="mx-auto mt-[30px] flex h-8 w-[15%] items-center justify-center">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>
      <p className="h11-style mx-auto mt-[20px] w-full justify-center text-center md:w-[50%]">
        Disclaimer: This website is a portfolio project created to showcase
        skills and knowledge in web development. While it has been hard coded by
        a human, Alex Contell, the content has been generated using artificial
        intelligence tools and may not be entirely original or comprehensive.
        While we have strived to ensure the accuracy and reliability of the
        information presented, it is important to verify the content from other
        sources before making any decisions or taking any actions based on it.
        This website is not intended to provide professional advice or
        recommendations. If you require expert guidance or assistance, please
        consult with a qualified professional.
      </p>
    </div>
  );
}

export default Footer;
