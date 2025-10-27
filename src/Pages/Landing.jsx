import React, { useState } from "react";
import Banner from "../assets/banner1.jpg"
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [LongUrl,setLongUrl]=useState();
  const navigate = useNavigate();

  const handleShorten=(e)=>{
    e.preventDefault()
    if(LongUrl)navigate(`/auth?createNew=${LongUrl}`)
  }

  return (
    <div className="flex flex-col items-center ">
      <h2  className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The Only URL Shortner <br />
        you"ll ever need!
      </h2>
      <form onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input  type='url' placeholder="Enter your Link" className="h-full flex-1 py-4 px-4 " 
        onChange={(e)=>setLongUrl(e.target.value)}/>
        <Button  className="h-full" type="submit" variant="destructive">Shorten!</Button>
      </form>
      <img src={Banner} alt="Banner" className="w-full my-11 md:px-11" />
      <Accordion type="multiple" collapsible className="w-full md:px-11">
  <AccordionItem value="item-1">
    <AccordionTrigger>How does the Trimmr URL shortener works?</AccordionTrigger>
    <AccordionContent>
      Yes. Creating an account allows you to manage your URLs, view analytics,
      and customize your short URLs.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Do i need an account to use the app?</AccordionTrigger>
    <AccordionContent>
      Yes. Creating an account allows you to manage your URLs, view analytics,
      and customize your short URLs.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Do i need an account to use the app?</AccordionTrigger>
    <AccordionContent>
      Yes. Creating an account allows you to manage your URLs, view analytics,
      and customize your short URLs.
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
  );
};

export default Landing;
