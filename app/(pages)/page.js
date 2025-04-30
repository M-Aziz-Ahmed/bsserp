'use client'
import Section1 from "../../components/TopSection/TopSection";
import React from "react";
import Card from "../../components/cards/Card";
import Modules from "../../components/modules/Modules";
import Scorecard from "../../components/cards/scorecard";
import Mobile from "../../components/Mobile";
import Customerservice from "../../components/Customerservice";
import Partners from "../../components/partners";
import ClientStories from "../../components/ClientStories";
import ReviewCard from "../../components/ReviewCard";
import Model from "@/components/Model";
import { useState } from "react";



export default function Home() {
   const [model, setModel] = useState(false);
   const[alert, setAlert] = useState({
    show: false,
    type: 'success',
    message: ''
});
  return (
    <>
    {model && <Model setModel={setModel} setAlert = {setAlert} alert = {alert} />}
    <Section1 setModel={setModel} setAlert = {setAlert} alert = {alert}/>
    {/* <CardsSection /> */}
    <Card  setModel={setModel}/>
    <Modules />
    <Scorecard />
    <Mobile setModel={setModel}/>
    <Customerservice setModel={setModel}/>
    <Partners/>
    <ClientStories/>
    <ReviewCard />
    </>
  );
}
