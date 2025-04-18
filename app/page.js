import Section1 from "@/app/components/TopSection/TopSection";
import Image from "next/image";
import CardsSection from "@/app/components/cards/CardsSection";
import React from "react";
import Card from "./components/cards/Card";
import Modules from "./components/modules/Modules";
import Scorecard from "./components/cards/scorecard";
import Mobile from "./components/Mobile";
import Customerservice from "./components/Customerservice";
import Partners from "./components/partners";


export default function Home() {
  return (
    <>
    <Section1 />
    <CardsSection />
    <Card />
    <Modules />
    <Scorecard />
    <Mobile/>
    <Customerservice/>
    <Partners/>
    </>
  );
}
