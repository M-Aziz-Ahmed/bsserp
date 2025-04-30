'use client'
import Section1 from "../../components/TopSection/TopSection";
import Image from "next/image";
import React from "react";
import Card from "../../components/cards/Card";
import Modules from "../../components/modules/Modules";
import Scorecard from "../../components/cards/scorecard";
import Mobile from "../../components/Mobile";
import Customerservice from "../../components/Customerservice";
import Partners from "../../components/partners";
import ClientStories from "../../components/ClientStories";
import ReviewCard from "../../components/ReviewCard";
import States from '@/stateManager/states';
import Alert from "../../components/Alert";


export default function Home() {
  const { alert, setAlert } = States();
  return (
    <>
    <Alert  alert={alert} setAlert = {setAlert}/>
    <Section1 alert={alert} setAlert = {setAlert}/>
    {/* <CardsSection /> */}
    <Card />
    <Modules />
    <Scorecard />
    <Mobile/>
    <Customerservice/>
    <Partners/>
    <ClientStories/>
    <ReviewCard />
    </>
  );
}
