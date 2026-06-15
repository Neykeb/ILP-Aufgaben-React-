import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  // zeigt alle Jobs an
  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Finde den Job, der zu deinen Fähigkeiten passt
            </h1>

            <p className="text-lg text-base-content/70 mb-8">
              JobMeister hilft dir dabei, interessante Stellenangebote aus den
              Bereichen Design, Entwicklung und IT zu entdecken. Informiere dich
              über Unternehmen, Anforderungen und Karrieremöglichkeiten an einem
              zentralen Ort.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Warum JobMeister?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Einfache Jobsuche</h3>
              <p>
                Durchsuche verschiedene Stellenangebote und finde passende
                Positionen für dein Erfahrungsniveau.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Detaillierte Informationen</h3>
              <p>
                Informiere dich über Unternehmen, Standorte, Anforderungen und
                weitere wichtige Details zu jeder Stelle.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Moderne Technologie</h3>
              <p>
                Dieses Projekt wurde mit React, TypeScript, TanStack Router,
                Tailwind CSS und DaisyUI entwickelt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-base-200 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Dein Weg zur nächsten Karrierechance
          </h2>

          <p className="text-base-content/70 leading-8">
            Egal ob du Berufseinsteiger, Junior Developer oder erfahrener
            Spezialist bist. JobMeister unterstützt dich dabei, relevante
            Stellenangebote zu entdecken und wichtige Informationen schnell und
            übersichtlich zu erhalten.
          </p>
        </div>
      </section>
    </main>
  );
}
