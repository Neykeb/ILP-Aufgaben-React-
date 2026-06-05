import { useState, useEffect } from "react";
export function PostMonitor() {
  const [suchbegriff, setSuchbegriff] = useState("");
  const [zeigtZusatz, setZeigtZusatz] = useState(false);

  useEffect(() => {
    if (suchbegriff === "") {
      // Setze den Browsertitel auf einen festen Standardwert.
      document.title = "Post Monitor - Startseite";
    } else {
      // Ansonsten setze den Titel dynamisch mit dem aktuellen Text.
      document.title = `Suche: ${suchbegriff}`;
    }

    // Das Array unten ist das Dependency Array.
    // Es enthält die Variable 'suchbegriff'.
    // React merkt sich den Wert. Ändert sich dieser Wert beim nächsten Render,
    // wird dieser gesamte Code-Block oben erneut ausgeführt.
  }, [suchbegriff]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post Monitor</h1>

      <input
        type="text"
        placeholder="Suche nach Posts..."
        value={suchbegriff}
        onChange={(event) => setSuchbegriff(event.target.value)}
      />

      <p>Aktueller Suchbegriff: {suchbegriff}</p>
      <button onClick={() => setZeigtZusatz(!zeigtZusatz)}>
        {zeigtZusatz ? "Zusatz ausblenden" : "Zusatz einblenden"}
      </button>

      {zeigtZusatz && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid black",
          }}
        >
          <p>Das ist die Zusatzansicht.</p>
        </div>
      )}
    </div>
  );
}
