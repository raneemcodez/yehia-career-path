import applications from "@/app/data/applications";

function DashboardPage() {
  const applicationCount = applications.length;

  return (
    <main>
      <h2>Welcome back, Yehia!</h2>

      <p>
        You have {applicationCount} job applications so far.
      </p>

      <p>Keep going! Every step brings you closer to your goal.</p>
    </main>
  );
}

export default DashboardPage
