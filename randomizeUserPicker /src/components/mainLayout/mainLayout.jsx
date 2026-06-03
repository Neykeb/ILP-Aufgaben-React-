import { useState } from "react";
import { Button } from "../buttons/button.default";
import { DisplayButton } from "../../displays/display.default";

const userList = [
  "Olha",
  "Szymon",
  "Josi",
  "Dilek",
  "Ali",
  "Rasha",
  "Ines",
  "Feras",
  "Julius",
  "Mohammad",
  "Yana",
  "I-Chieh",
  "Razieh",
  "Vitali",
];

export function MainLayout() {
  const [name, setName] = useState("Was geht ab?");

  function picker() {
    const randomUserPicker = Math.floor(Math.random() * userList.length);
    setName(userList[randomUserPicker]);
  }

  return (
    <>
      <section className="flex justify-center items-center flex-col h-dvh">
        <DisplayButton display={name} />
        {/* {Prop wird erstellt mit dem Namen 'display' und der Wert ist der State 'name'} */}

        <Button pickername={picker} />
        {/* {Prop wird erstellt mit dem Namen 'pickername' und der Wert ist die Funktion 'picker'} */}

        <div className="Card mt-10">
          <div className="card bg-orange-950 w-96 shadow-md">
            <figure>
              <img src="/src/assets/people.png" alt="people" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Personen</h2>
              <ul>
                {userList.map((item, index) => (
                  <li key={index}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
