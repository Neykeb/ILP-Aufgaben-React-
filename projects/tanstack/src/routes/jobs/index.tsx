import { createFileRoute } from "@tanstack/react-router";
import { JobCard } from "../../components/molecules/jobCard";
import { jobs } from "../../data/jobs";

export const Route = createFileRoute("/jobs/")({
  validateSearch: (search) =>{
    return{
      level: search.level as string | undefined,
    }
  },
  component: RouteComponent,
});


function RouteComponent() {
  const { level } = Route.useSearch();
  //Lies aus der URL den Wert level.
  
  const filteredJobs = level ? jobs.filter((job)=> job.level === level): jobs
return (
  <main className="min-h-screen bg-base-100 px-6 py-12">
    <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[250px_1fr]">
      <aside className="rounded-2xl bg-base-200 p-6 shadow-md">
        <h2 className="mb-4 text-xl font-bold">Job Filter</h2>

        <ul className="space-y-2">
          <li>Alle Jobs</li>
          <li>Junior Jobs</li>
          <li>Fortgeschritten</li>
          <li>Senior Jobs</li>
        </ul>
      </aside>

      <div>
        <h1 className="mb-6 text-4xl font-bold">Aktuelle Stellenangebote</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredJobs.map((job) => {
            return <JobCard key={job.id} job={job} />;
          })}
        </div>
      </div>
    </section>
  </main>
);
  
}


// return (
//   <>
//     <div>
//       <h1>Aktuelle Stellenangebote</h1>
//       <p>
//         Hier findest du rechtliche Informationen zu diesem Projekt sowie
//         Kontaktdaten und Hinweise zur Nutzung der Anwendung. Alle Inhalte dienen
//         ausschließlich Demonstrations- und Lernzwecken.
//       </p>
//     </div>
//     {filteredJobs.map((job) => {
//       return <JobCard key={job.id} job={job} />;
//     })}
//   </>
// );