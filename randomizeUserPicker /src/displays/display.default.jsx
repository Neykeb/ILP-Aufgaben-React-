export function DisplayButton({display}){
    //Hier wird die Prop 'display' entgegengenommen, die den Wert des States 'name' aus App.jsx enthält.
    return (
    <p className='text-4xl mb-3'>{display} </p>
    //Hier wird die Prop 'display' in einem Absatz-Tag ausgegeben. Jedes Mal, wenn sich der State 'name' ändert, wird die Anzeige automatisch aktualisiert, da die Prop 'display' den aktuellen Wert von 'name' enthält.
    )
}