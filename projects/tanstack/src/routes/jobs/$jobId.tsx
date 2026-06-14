import { createFileRoute } from '@tanstack/react-router'
import { jobs } from '../../data/jobs';

export const Route = createFileRoute('/jobs/$jobId')({
  validateSearch: (search) =>{
    return {
      tab: search.tab as string | undefined,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { jobId } = Route.useParams();
  const { tab } = Route.useSearch();

  const jobGefunden = jobs.find((job) => {
    return job.id === Number(jobId);
  });

  return (
    <main className="min-h-screen bg-base-100 px-6 py-12 flex items-center justify-start flex-col">
      <h1 className='text-gray-400 text-5xl '>Details</h1>
      <div className='flex flex-col justify-center py-10'>

        <p>Job ID: {jobId}</p>
        <h1>{jobGefunden?.title}</h1>

        {tab === "company" && (
          <>
            <p>Company: {jobGefunden?.company}</p>
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
