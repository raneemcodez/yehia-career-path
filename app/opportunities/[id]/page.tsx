import Link from "next/link";
import opportunities from "@/app/data/opportunities";
export const instant = false



const OpportunityDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const {id} = await params ;

  const selectedOpportunity = opportunities.find(
    (opportunity) =>  opportunity.id  === id 
  );

  if (!selectedOpportunity) {
    return (
      <main className="mx-10 w-full max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-semibold">
          Opportunity not found
        </h1>

        <Link
          href="/opportunities"
          className="mt-6 inline-block text-[#65775A] hover:underline"
        >
          Back to opportunities
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-10 w-full max-w-4xl px-6 py-12">
      <Link
        href="/opportunities"
        className="text-sm text-[#65775A] hover:underline"
      >
        ← Back to opportunities
      </Link>

      <p className="mt-8 text-sm text-[#77776F]">
        {selectedOpportunity.company}
      </p>

      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        {selectedOpportunity.title}
      </h1>

      <p className="mt-4 text-[#77776F]">
        {selectedOpportunity.location}
      </p>

      <div className="mt-8 rounded-2xl border border-[#E7E7E0] bg-white p-6">
        <h2 className="text-lg font-semibold">About this role</h2>
        <p className="mt-3 leading-7 text-[#77776F]">
          {selectedOpportunity.description}
        </p>
      </div>
    </main>
  );
}

export default OpportunityDetails