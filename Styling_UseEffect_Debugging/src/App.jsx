import { useState } from "react";
import "./App.css";
import styles from "./komponente/askCard.module.css";
function App() {
  return (
    <>
      <div className="beschreibung">
        <h1>Task Monitor</h1>
        <p>Willkomen am Board. Hier erwarten dich coole Aufgaben.</p>
      </div>

      <section>
        {/* Liste aus 3 Aufgaben */}
        <div className={styles.wrapper}>
          {" "}
          <div className="karte">
            <div className={styles.liste}>
              <ul>
                <li>UI/UX-Umsetzung</li>
                <li>Status (In Bearbeitung)</li>
                <li>Priotität (mittel)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          {" "}
          <div className="karte">
            <div className={styles.liste}>
              <ul>
                <li>Backend</li>
                <li>Status (Erledigt)</li>
                <li>Priotität (niedrig)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          {" "}
          <div className="karte">
            <div className={styles.liste}>
              <ul>
                <li>Debugging</li>
                <li>Status (Offen)</li>
                <li>Priotität (hoch)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
