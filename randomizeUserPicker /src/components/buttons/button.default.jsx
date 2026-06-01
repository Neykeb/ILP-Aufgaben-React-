export function Button({pickername}){
    //Hier wird die Prop 'pickername' entgegengenommen, die die Funktion 'picker' aus App.jsx enthält.
    return (
        
      <button onClick={pickername} className="btn btn-outline btn-secondary" >
        Secondary
      </button>
      //Hier wird ein Button erstellt, der die Funktion 'pickername' (die die Funktion 'picker' aus App.jsx ist) als onClick-Event hat. Jedes Mal, wenn der Button geklickt wird, wird die Funktion 'picker' ausgeführt, die einen zufälligen Namen aus der Liste auswählt und den State 'name' aktualisiert.
    );
}