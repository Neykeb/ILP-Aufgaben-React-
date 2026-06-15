import { Link } from "@tanstack/react-router";
// Es wird nur die Typ-Beschreibung importiert,
// kein echter JavaScript-Code.
import type { Job } from "../../data/jobs";

type jobCardProp = {
  job: Job;
};

export function JobCard({ job }: jobCardProp) {
  // zeigt einen einzelnen Job an
  return (
    <>
      <h2>
        {job.id}. {job.title}
      </h2>
      <h2>Firma: {job.company}</h2>
      <h2>Standort: {job.location}</h2>
      <h2>Level: {job.level}</h2>

      <Link
        to="/jobs/$jobId"
        className="bg-primary w-fit py-1 px-2 rounded-md"
        params={{ jobId: String(job.id) }}
        // search setzt Werte nach dem Fragezeichen in der URL.
        // tab: "details" erzeugt:
        // ?tab=details
        // Diese Information wird später in $jobId.tsx gelesen.
        search={{ tab: "details" }}
      >
        Details sehen
      </Link>
    </>
  );
}


 // params gibt Werte für dynamische Teile der Route.
// params: Nimm den Platzhalter $jobId(jobId)
// und ersetze ihn durch diesen Wert: String(job.id)
//Hintergrund: In URL wird alles in String ausgelesen, deshalb muss die Zahl in String umgewandelt werden.
