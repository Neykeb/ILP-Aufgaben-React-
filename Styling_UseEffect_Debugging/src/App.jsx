
import styles from "./komponente/askCard.module.css";
import "./App.css";
import { useState } from "react";
function App() {
  
  const kartenDaten = [
    {
      id: 1,
      titel: "UI/UX-Umsetzung",
      status: "In Bearbeitung",
      statusClass: styles.inBearbeitung,
      prio: "mittel",
      cardClass: styles.mittel,
    },
    {
      id: 2,
      titel: "Backend",
      status: "Erledigt",
      statusClass: styles.erledigt,
      prio: "niedrig",
      cardClass: styles.niedrig,
    },
    {
      id: 3,
      titel: "Debugging",
      status: "Offen",
      statusClass: styles.offen,
      prio: "hoch",
      cardClass: styles.hoch,
    },
  ];
  const [aufgaben, setAufgaben] = useState(kartenDaten);
  function statusChange(index){
    const neueAufgaben = [...aufgaben]
    // komplett neue Liste (kopie) erstellen und sie überscheiben. 
          
          if (neueAufgaben[index].status === "Offen") {
            neueAufgaben[index].status = "In Bearbeitung";
            neueAufgaben[index].statusClass = styles.inBearbeitung;
           } 
           else if (neueAufgaben[index].status === "In Bearbeitung") {
            neueAufgaben[index].status = "Erledigt";
            neueAufgaben[index].statusClass = styles.erledigt;
          }
           else if (neueAufgaben[index].status === "Erledigt") {
            neueAufgaben[index].status = "Offen";
            neueAufgaben[index].statusClass = styles.offen;
          }
        setAufgaben(neueAufgaben)
      }
        
  return (
    <>
    <section className={styles.wrapper}>
      {kartenDaten.map((item, index)=>{
        
        return (
          <>
            <ul className= {styles.liste}>
              {item.titel} 
              <li className={item.statusClass}> {item.status} </li>
              <li className={item.cardClass}> {item.prio} </li><button onClick={()=> statusChange(index)}>click me!</button>
              
            </ul>
          </>
        );
      })}
    </section>
     
    </>
  );
}

export default App;
