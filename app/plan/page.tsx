import { Space_Mono } from 'next/font/google'
import React from 'react'

const plan = () => {
  return (
    <>
      <main >
        <div className='mx-auto  px-6 py-12'>
        <h6 >YEHIA'S CAREER JOURNEY!</h6>
        <h1 className='mt-2 text-4xl font-semibold tracking-tight md:text-5xl'>A plan for your next step.</h1>

        <h1 className='mt-4 max-w-2xl leading-7 text-neutral-600'>
          I don’t need to do everything today. I need to know my next step.
        </h1>
        <div className="mt-4 space-y-3 rounded-2xl border border-stone-200 bg-[#E8EDE4] p-6">
          <h5>
            01 · PREPARE
          </h5>
          <h1>
            Build a strong foundation
          </h1>
          <h2>
            Get your CV ready, organize your portfolio, and choose a role to focus on.
          </h2>
         <hr className="my-8 border-neutral-300" />
          <p>• Update your CV with relevant skills and projects.</p>
          <p>• Organize your GitHub projects and portfolio.</p>
          <p>• Choose a target role that matches your skills.</p>
         
        </div>


          <div className="mt-4 space-y-3 rounded-2xl border border-stone-200 bg-[#E8EDE4] p-6">
          <h5>
           02 · PRACTICE
          </h5>
          <h1>
            Grow your confidence
          </h1>
          <h2>
            Strengthen the skills you need and prepare to talk about your experience.
          </h2>
         <hr className="my-8 border-neutral-300" />
          <p>• Practice role-related technical questions.</p>
          <p>• Prepare answers to common interview questions.</p>
          <p>• Build or improve one relevant project.</p>
         
        </div>

          <div className="mt-4 space-y-3 rounded-2xl border border-stone-200 bg-[#E8EDE4] p-6">
          <h5>
            03 · APPLY
          </h5>
          <h1>
            Take action consistently
          </h1>
          <h2>
            Find suitable roles, apply thoughtfully, and keep track of your progress.
          </h2>
         <hr className="my-8 border-neutral-300" />
          <p>• Find opportunities that match your target role.</p>
          <p>• Submit tailored applications and record each one.</p>
          <p>• Follow up on applications when appropriate.</p>
         
        </div>
    </div>
     </main>
    </>
  )
}

export default plan
