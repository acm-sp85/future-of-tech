"use client";
import NavBarPhone from "./components/NavBarPhone";
import NavBar from "./components/NavBar";
import LandingImages from "./components/LandingImages";
import TheFutureOfTechnology from "./components/TheFutureOfTechnology";
import GlobalImpact from "./components/GlobalImpact";
import ArtificialIntelligence from "./components/ArtificialIntelligence";
import ArVr from "./components/ArVr";
import BlockChain from "./components/BlockChain";
import BillsQuote from "./components/BillsQuote";
import BioTech from "./components/BioTech";
import SustainableTechLanding from "./components/SustainableTechLanding";
import SustainableTech from "./components/SustainableTech";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="bg-darkGrey">
      {/* NAV BAR */}
      <div className="sticky top-0 z-50 hidden w-full lg:flex">
        <NavBar />
      </div>
      {/* NAV BAR FOR PHONES*/}
      <div className="sticky right-0 top-0 z-50 flex w-full lg:hidden">
        <NavBarPhone />
      </div>
      <LandingImages />
      <TheFutureOfTechnology />
      <GlobalImpact />
      {/*<div className="flex h-[1px] w-full bg-yellow"> </div>
      <ArtificialIntelligence />
      <div className="h-[2px] w-full bg-yellow"> </div>
      <div className="mt-1 h-[1px] w-full bg-blue"> </div>
      <ArVr />
      <div className="h-[2px] w-full bg-yellow"> </div>
      <BlockChain />
      <div className="h-[3px] w-full bg-yellow"> </div>
      <div className="mt-2 h-[2px] w-full bg-green"> </div>
      <div className="mt-3 h-[1px] w-full bg-red"> </div>
      <div className="mt-4 h-[1px] w-full bg-blue"> </div>
      <BillsQuote />
      <div className="h-[1px] w-full bg-yellow"> </div>
      <BioTech />
      <div className="h-[1px] w-full bg-green"> </div>
      <SustainableTechLanding />
      <SustainableTech />
      <div className="h-[1px] w-[100vw] bg-blue"></div>
      <Footer /> */}
    </div>
  );
}
