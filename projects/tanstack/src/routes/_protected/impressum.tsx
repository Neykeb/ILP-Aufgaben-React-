import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/impressum')({
  component: ImpressumPage,
})

function ImpressumPage() {
  return (
    <>
      <main className="min-h-screen bg-base-100 px-6 py-12">
        <section className="mx-auto max-w-4xl rounded-2xl bg-base-200 p-8 shadow-md">
          <h1 className="mb-4 text-4xl font-bold">Impressum</h1>

          <p className="mb-8 text-base-content/70">
            JobMeister ist ein Lern- und Demonstrationsprojekt. Die
            dargestellten Inhalte und Stellenangebote sind Platzhalter und keine
            echten Jobangebote.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="mb-2 text-2xl font-semibold">
                Projektinformationen
              </h2>
              <p className="text-base-content/70">
                Diese Anwendung wurde mit React, TypeScript, TanStack Router,
                Tailwind CSS und DaisyUI entwickelt.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-semibold">Kontakt</h2>
              <div className="space-y-1 text-base-content/70">
                <p>
                  <strong>Projektname:</strong> JobMeister
                </p>
                <p>
                  <strong>Entwickler:</strong> Max Mustermann
                </p>
                <p>
                  <strong>E-Mail:</strong> max.mustermann@example.com
                </p>
                <p>
                  <strong>Standort:</strong> Berlin, Deutschland
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-semibold">
                Haftungsausschluss
              </h2>
              <p className="text-base-content/70">
                Alle Inhalte dienen nur zu Lernzwecken. Für Vollständigkeit,
                Richtigkeit und Aktualität wird keine Gewähr übernommen.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-semibold">
                Datenschutzhinweis
              </h2>
              <p className="text-base-content/70">
                Diese Anwendung verarbeitet keine personenbezogenen Daten und
                speichert keine Nutzerinformationen.
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
