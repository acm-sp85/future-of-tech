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
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  useSpring,
} from "motion/react";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // useEffect(() => {
  //   console.log("Is in view ->", isInView);
  // }, [isInView]);

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#CD320C",
        }}
      />
      <motion.section>
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
          <div ref={ref}>{isInView && <ArtificialIntelligence />}</div>

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
    </>
  );
}
