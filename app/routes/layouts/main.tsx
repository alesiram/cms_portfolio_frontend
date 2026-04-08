import React from 'react'
import { Outlet } from 'react-router'




export default function MainLayout() {
  return (
   <>

    <section className="max-2-6wl auto px-6 my-8"> 
      <Outlet/> 
    </section>
   </>
  )
}
