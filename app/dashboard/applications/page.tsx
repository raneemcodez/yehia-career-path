import applications from "@/app/data/applications";

function ApplicationsPage() {
  return (
    <main>
      <h2 className="text-2xl font-semibold text-[#20221E]">
        My Applications
      </h2>

      <p className="mt-2 text-[#77776F]">
        Track your job search progress in one place.
      </p>

      <div className="mt-6 space-y-4">
        {applications.map((application) => (
          <article
            key={application.id}
            className="rounded-xl border border-[#E7E7E0] bg-white p-5"
          >
            <h3 className="font-semibold text-[#20221E]">
              {application.title}
            </h3>

            <p className="mt-1 text-sm text-[#77776F]">
              {application.company}
            </p>

            <p className="mt-3 text-sm text-[#65775A]">
              Status: {application.status}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default ApplicationsPage