import { useState, useRef } from "react";
import "./App.css";

function App() {
  const meinUseRef = useRef(null);

  function handleFocus() {
    console.log(meinUseRef.current);
    meinUseRef.current.focus();
  }

  function clearFocus() {
    meinUseRef.current.focus();
    meinUseRef.current.value = "";
  }

  return (
    <>
      <h1>useRef Playground</h1>
      <form action="">
        <input ref={meinUseRef} type="text" placeholder="Name" />
        <button type="button" onClick={handleFocus}>
          fokus setzen
        </button>
        <button type="button" onClick={clearFocus}>
          Eingabe leeren und fokussieren
        </button>
      </form>
    </>
  );
}

export default App;

//////////////////////////////////////////////////////////////////
