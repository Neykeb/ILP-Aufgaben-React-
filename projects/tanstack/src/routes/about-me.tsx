import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="min-h-screen bg-base-100 px-6 py-12">
      <section className="mx-auto max-w-4xl rounded-2xl bg-base-200 p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold">Über uns</h1>

        <p className="mb-8 text-base-content/70">
          JobMeister ist ein modernes Job-Board-Projekt, das mit React,
          TypeScript, TanStack Router, Tailwind CSS und DaisyUI entwickelt
          wurde. Ziel des Projekts ist es, Stellenangebote übersichtlich
          darzustellen und moderne Frontend-Technologien praktisch anzuwenden.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="mb-2 text-2xl font-semibold">Unsere Mission</h2>
            <p className="text-base-content/70">
              Wir möchten Bewerbern eine einfache Möglichkeit bieten,
              Stellenangebote zu entdecken und wichtige Informationen schnell
              und übersichtlich zu finden.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Technologien</h2>
            <div className="flex flex-wrap gap-2">
              <div className="badge badge-primary">React</div>
              <div className="badge badge-secondary">TypeScript</div>
              <div className="badge badge-accent">TanStack Router</div>
              <div className="badge badge-info">Tailwind CSS</div>
              <div className="badge badge-success">DaisyUI</div>
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Projektziel</h2>
            <p className="text-base-content/70">
              Dieses Projekt demonstriert Routing, dynamische Routen, Search
              Parameters, Komponentenarchitektur und modernes UI-Styling.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
