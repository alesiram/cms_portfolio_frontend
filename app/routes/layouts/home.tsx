import React from 'react'
import { Outlet } from 'react-router'
import Hero from "~/components/Hero";

export default function HomeLayout() {
  return (
   <>
    <Hero />
    <section className="max-2-6wl auto px-6 my-8"> 
      <Outlet/> 
    </section>
   </>
  )
}
