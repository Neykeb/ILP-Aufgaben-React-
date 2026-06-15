// createFileRoute macht diese Datei zu einer Route.
import { createFileRoute } from "@tanstack/react-router";
import { JobCard } from "../../components/molecules/jobCard";
import { jobs } from "../../data/jobs";
import { Link } from "@tanstack/react-router";
export const Route = createFileRoute("/jobs/")({
  // validateSearch beschreibt, welche Search Params diese Route benutzen darf.
  // Search Params sind Werte nach dem Fragezeichen in der URL.
  // Beispiel: /jobs?level=Junior
  validateSearch: (search) => {
    return {
      //Siehe Zeile 52
      level: search.level as string | undefined,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  // Route.useSearch() liest die Search Parameter aus der aktuellen URL.
  //const { level } nimmt aus diesem Objekt nur level heraus.
  const { level } = Route.useSearch();
 
  const filteredJobs = level ? jobs.filter((job) => job.level === level) : jobs;
  
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
          <h1 className="mb-6 text-4xl font-bold">
            <Link to="/jobs" search={{level:undefined}}>Aktuelle Stellenangebote</Link>
          </h1>

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

// level ist ein Search Parameter aus der URL.
// Beispiel:
// /jobs?level=Junior
//
// search.level liest den Wert "Junior" aus der URL.
//
// as string | undefined ist eine TypeScript-Anweisung.
// Sie sagt:
//
// string
// → level darf Text enthalten.
// Beispiel:
// "Junior"
// "Senior"
//
// undefined
// → level darf auch nicht vorhanden sein.
// Beispiel:
// /jobs
//
// Dann existiert level nicht und hat den Wert undefined.
//
// Dadurch funktionieren beide URLs:
//
// /jobs
//
// und
//
// /jobs?level=Junior
//
// ohne TypeScript-Fehler.
//level: search.level as string | undefined,