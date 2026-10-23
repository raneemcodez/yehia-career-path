import React from 'react'

import {  Code2,
  Database,
  Layers3,
  MapPin,
  ArrowUpRight,
  Compass,
   } from "lucide-react";
import Opportunity from "@/app/data/opportunities";
import Link from "next/link";


const icons = [Code2, Database, Layers3];
const opportunities = () => {
  return (
    <>
   <main className="min-h-screen bg-[#F8F8F5] px-6 py-14 text-[#20221E] sm:px-10">
      <div className="mx-auto ">

       
        <header className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#77776F]">
              CAREER PATH
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore opportunities
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#77776F] sm:text-base">
              Find a role that matches your next step.
            </p>
          </div>

          <div className="hidden rounded-2xl bg-[#E6EADF] p-4 sm:block">
            <Compass className="h-8 w-8 text-[#65775A]" />
          </div>
        </header>

       
        <div className="mb-5 flex items-center justify-between border-t border-[#E4E4DD] pt-6">
          <p className="text-xs font-medium tracking-wider text-[#77776F]">
            AVAILABLE OPPORTUNITIES
          </p>
        </div>

        <div className="space-y-4">
          {Opportunity.map((Opportunity, index) => {
            const Icon = icons[index % icons.length];

            return (
              <main
                key={Opportunity.id}
                className="group rounded-2xl border border-[#E7E7E0] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#CFD6C8] hover:shadow-lg hover:shadow-[#65775A]/5 sm:p-6"
              >
                <div className="flex items-start gap-4 sm:gap-5">

                 
                  <div className="shrink-0 rounded-xl bg-[#F0F1EB] p-3">
                    <Icon className="h-6 w-6 text-[#596B4F]" />
                  </div>

                  
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {Opportunity.title}
                    </h2>

                    <p className="mt-1.5 text-sm text-[#77776F]">
                      {Opportunity.company}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 text-sm text-[#77776F]">
                      <MapPin className="h-4 w-4 shrink-0" />
                      {Opportunity.location}
                    </div>
                  </div>
                </div>

               
             <div className="mt-5 border-t border-[#EEEEEA] pt-4">
             <Link
               href={`/opportunities/${Opportunity.id}`}
               className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#65775A] hover:text-[#405238]">
               View opportunity
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </Link>
                
                </div>
              </main>
            );
          })}
        </div>

      </div>
    </main>

      
    </>
  )
}

export default opportunities
