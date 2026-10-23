import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-[#F8F8F5] px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-semibold text-[#20221E]">
          My Dashboard
        </h1>

        <nav className="mt-6 flex gap-6 border-b border-[#E7E7E0] pb-4">
          <Link
            href="/dashboard"
            className="text-[#65775A] hover:text-[#405238]"
          >
            Overview
          </Link>

          <Link
            href="/dashboard/applications"
            className="text-[#65775A] hover:text-[#405238]"
          >
            Applications
          </Link>
        </nav>

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
