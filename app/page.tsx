import Link from "next/link"

const page = () => {
  return (
    <>
      <div className="mt-12 rounded-2xl border border-stone-200 bg-[#E8EDE4] p-8 md:p-8 m-10">
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
        Your next step starts here
        </h1>
        <h2 className="text-black"> Meet Yehia</h2>
        <p className="mt-3 max-w-3xl leading-8 text-neutral-600">Yehia is a Computer Science graduate from the Lebanese University, First Branch. After graduation, he was excited to start his career, but finding the right job felt overwhelming.
          Now, he wants to organize his job search, improve his skills, and take small steps toward his career goals.</p>
      </div>
      
      <div className="mt-2 rounded-2xl border border-stone-200 bg-[#E8EDE4] p-6 md:p-8 m-10">
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
          Two Months, One Goal
        </h1 >
        <p className="mt-3 max-w-3xl leading-8 text-neutral-600">
          Yehia has two months to work toward his career goal.
          He wants to improve his skills, build his portfolio, and apply for opportunities that match his interests.
          With a clear plan and small daily steps, he can make progress and feel more confident about his future.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
            <ul>
          <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700">
          <li>
            <Link href={"/opportunities"}>
            Find Opportunities
            </Link>
          </li>
        </button>
        </ul>
      
        <ul>
        <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100">
          <li>
            <Link href={"/plan"}>
            Explore My Plan
            </Link>
          </li>
        </button>
       </ul>
      </div>
      </div>
    </>
  )
}

export default page

