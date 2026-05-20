
import "./App.css";

interface Tool {
  name: string;
  beschreibung: string;
  einsatz: string;
}

const toolsData: Tool[] = [
  {
    name: "Node.js",
    beschreibung:
      "Eine Laufzeitumgebung, die JavaScript außerhalb des Browsers ausführt.",
    einsatz:
      "Startet den Entwicklungsserver und führt die Werkzeuge auf dem PC aus.",
  },
  {
    name: "npm",
    beschreibung:
      "Der Node Package Manager, der Pakete und Bibliotheken verwaltet.",
    einsatz:
      "Installiert React, Vite und andere Erweiterungen in den node_modules-Ordner.",
  },
  {
    name: "Vite",
    beschreibung: "Ein extrem schnelles Entwicklungswerkzeug und Build-Tool.",
    einsatz:
      "Aktualisiert den Browser blitzschnell beim Code-Schreiben und packt das Projekt.",
  },
];

function ToolCard({ name, beschreibung, einsatz }: Tool) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px 0",
        backgroundColor: "#f9f9f9",
        color: "#333", // Sorgt für gute Lesbarkeit bei dunklen Themes
      }}
    >
      <h3>🔧 {name}</h3>
      <p>
        <strong>Beschreibung:</strong> {beschreibung}
      </p>
      <p>
        <strong>Typischer Einsatz:</strong> {einsatz}
      </p>
    </div>
  );
}

// Hier ist jetzt die eine, zusammengeführte App-Komponente
function App() {

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "left",
      }}
    >
      <header>
        <h1>Was ist React?</h1>
      </header>

      <main>
        <section>
          <h2>Wofür wird React in der Webentwicklung eingesetzt?</h2>
          <p>
            React ist eine JavaScript-Bibliothek für die Entwicklung von
            Benutzeroberflächen.
          </p>

          <h3>Rolle von React im modernen Frontend</h3>
          <p>
            React ermöglicht die Erstellung von komponentenbasierten
            Benutzeroberflächen, die wiederverwendbar und wartbar sind.
          </p>

          <h4>React 19: Warum arbeiten wir mit dieser Version?</h4>
          <p>
            React 19 bringt verbesserte Leistungen und neue Funktionen mit sich,
            die die Entwicklung von Webanwendungen noch effizienter machen.
          </p>
        </section>

        {/* Hier wird deine neue Werkzeug-Sektion fehlerfrei eingefügt */}
        <section style={{ marginTop: "40px" }}>
          <h2>Werkzeuge der modernen Webentwicklung</h2>

          {toolsData.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              beschreibung={tool.beschreibung}
              einsatz={tool.einsatz}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
