import { createFileRoute } from "@tanstack/react-router";
import { jobs } from "../../data/jobs";

export const Route = createFileRoute("/jobs/$jobId")({
  // validateSearch beschreibt die Search Parameter für diese Detailseite.
  // Beispiel:
  // /jobs/1?tab=details
  // tab ist hier der Search Parameter.
  validateSearch: (search) => {
    return {
      // search.tab liest den tab-Wert aus der URL.
      // Bei /jobs/1?tab=company ist:
      // search.tab = "company"
      tab: search.tab as string | undefined,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  // Route.useParams() liest dynamische Parameter aus der URL.
  // Bei /jobs/3 gibt Route.useParams() ungefähr zurück:
  // { jobId: "3" }
  const { jobId } = Route.useParams();
  const { tab } = Route.useSearch();
  // Siehe Zeile 65
  const jobGefunden = jobs.find((job) => {
    return job.id === Number(jobId);
  });

  return (
    <main className="min-h-screen bg-base-100 px-6 py-12 flex items-center justify-start flex-col">
      <h1 className="text-gray-400 text-5xl ">Details</h1>
      <div className="flex flex-col justify-center py-10">
        <p>Job ID: {jobId}</p>
        {/* Erst prüfen, ob jobGefunden existiert.
            Wenn ja, wird title angezeigt. */}
        <h1>{jobGefunden?.title}</h1>

        {/* && bedeutet:
            Wenn die Bedingung links true ist,
            dann zeige den JSX-Code rechts an. */}
        {tab === "company" && (
          <>
            <p>Company: {jobGefunden?.company}</p>
          </>
        )}
        {tab === "location" && (
          <>
            <p>Location: {jobGefunden?.location}</p>
          </>
        )}

        {tab === "level" && (
          <>
            <p>Level: {jobGefunden?.level}</p>
          </>
        )}

        {(tab === "details" || !tab) && (
          <>
            <p>Description: {jobGefunden?.description}</p>
          </>
        )}
      </div>
    </main>
  );
}

 // jobGefunden soll am Ende genau ein Job-Objekt enthalten.
  //
  // jobs.find() sucht in der jobs-Liste nach dem ersten Job,
  // der die Bedingung erfüllt.
  //
  // Bei jedem Durchlauf ist job ein einzelner Job aus der Liste.
  //
  // job.id ist die echte ID aus jobs.ts.
  //
  // Number(jobId) macht aus dem String aus der URL eine Zahl.
  //
  // Beispiel:
  // jobId = "3"
  // Number(jobId) = 3
  //
  // Dann kann sauber verglichen werden:
  // job.id === 3
  //
  // Wenn der Job gefunden wird,
  // enthält jobGefunden das komplette Job-Objekt.