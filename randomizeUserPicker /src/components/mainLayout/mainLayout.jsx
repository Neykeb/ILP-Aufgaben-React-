import { useState } from 'react';
import { Button } from '../buttons/button.default';
import { DisplayButton } from '../../displays/display.default';

const userList = [
   "Fabregas",
   "Xavi",
   "Alonso",
   "Lopes",
   "Fernades",
   "Pique",
   "Leonardo",
   "Mile",
 ]

export function MainLayout(){
    
    const [name, setName] = useState('Was geht ab?')

  function picker(){
    const randomUserPicker = Math.floor(Math.random() * userList.length)
    setName(userList[randomUserPicker])
  }
    return (
      <>
        <section className="flex justify-center items-center flex-col h-dvh">
          <DisplayButton display={name} />
          {/* {Prop wird erstellt mit dem Namen 'display' und der Wert ist der State 'name'} */}

          <Button pickername={picker} />
          {/* {Prop wird erstellt mit dem Namen 'pickername' und der Wert ist die Funktion 'picker'} */}

          <div className="Card mt-10">
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1685449068033-684173da51a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="people"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Personen</h2>
                <p>{userList}</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}