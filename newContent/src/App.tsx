import "./App.css";
import Navbar from "./Navbar.tsx"; // Wir importieren die Navbar
interface Ilp {
  id: number;
  aufgabe: string;
}

const aufgaben: Ilp[] = [
  { id: 1, aufgabe: "React Grundlagen" },
  { id: 2, aufgabe: "State und Props" },
  { id: 3, aufgabe: "Komponentenstruktur" },
  { id: 4, aufgabe: "Styling mit Tailwind CSS" },
];

function AufgabenCard({ id, aufgabe }: Ilp) {
  return (
    <div
      style={{
        border: "1px solid #444",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px 0",
        backgroundColor: "#1f2937", // Ein schönes Dunkelgrau passend zur Navbar
        color: "#fff",
        textAlign: "left",
      }}
    >
      <h3>Aufgabe {id}</h3>
      <p>{aufgabe}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <header>
          <h1>ILP Aufgaben</h1>
        </header>

        <main>
          <h2>Meine Aufgaben</h2>

          {/* 4. Hier läuft das Fließband und baut die Karten vollautomatisch! */}
          {aufgaben.map((eintrag) => (
            <AufgabenCard
              key={eintrag.id}
              id={eintrag.id}
              aufgabe={eintrag.aufgabe}
            />
          ))}

          {/* Hier drunter kannst du später deine "bearbeiteten Aufgaben" filtern */}
          <h2 style={{ marginTop: "40px" }}>Bearbeitete Aufgaben</h2>
          <p style={{ color: "#aaa" }}>
            Hier kommen bald die erledigten Aufgaben hin...
          </p>
        </main>
      </div>
    </>
  );
}

export default App;
