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
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section ref={targetRef} style={{ opacity }}>
      <div className="bg-darkGrey">
        <div className="sticky top-0 z-50 hidden w-[100vw] lg:flex">
          <NavBar />
        </div>

        <div className="sticky top-0 z-50 flex lg:hidden">
          <NavBarPhone />
        </div>
        <div className="h-[100vh]">
          <LandingImages />
          <TheFutureOfTechnology />
        </div>

        <div className="hidden md:flex">
          <GlobalImpact />
        </div>
        <div className="hidden h-[1px] w-full bg-yellow md:flex"> </div>
        <div>
          <ArtificialIntelligence />
        </div>

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
        <Footer />
      </div>
    </motion.section>
  );
}
