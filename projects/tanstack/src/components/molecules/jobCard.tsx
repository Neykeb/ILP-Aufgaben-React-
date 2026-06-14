import { Link } from "@tanstack/react-router";
import type { Job } from "../../data/jobs";

type jobCardProp = {
    job: Job;
}

export function JobCard({job}: jobCardProp ){
    
    return (
      <>
        <h2>
          {job.id}. {job.title}
        </h2>
        <h2>Firma: {job.company}</h2>
        <h2>Standort: {job.location}</h2>
        <h2>Level: {job.level}</h2>
        
       
        <Link to="/jobs/$jobId" className="bg-primary w-fit py-1 px-2 rounded-md"
        params={{ jobId: String(job.id) }}
        search={{tab:'details'}}
        >
          Details sehen
        </Link>
      </>
    );
}
// params: Nimm den Platzhalter $jobId(jobId)
// und ersetze ihn durch diesen Wert: String(job.id)
//Hintergrund: In URL wird alles in String ausgelesen, deshalb muss die Zahl in String umgewandelt werden.