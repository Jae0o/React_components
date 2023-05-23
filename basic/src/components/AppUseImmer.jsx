import React from 'react'
import '../Css/UseImmer.css'
import { useImmer } from 'use-immer'

export default function AppUseImmer() {
    const [State, updataState] = useImmer(preson);

    const ChangeName = () => {
        const Name = prompt(" Write Name");
        updataState((e) => { e.name = Name })
    };

    const ChangeAge = () => {
        const Age = prompt("Write Age");
        updataState((e) => { e.age = Age })
    };

    const Console = () => {
        console.log(State);
    }
    return (
        <div className='ImmerBox'>
            <h1>Use Immer Test Box</h1>
            <p> Name : {State.name}</p>
            <p> Age : {State.age}</p>

            <button onClick={ChangeName}>Change Name</button>
            <button onClick={ChangeAge}>Change Age</button>
            <button onClick={Console}> Console.log</button>
        </div>
    )
}

const preson = {
    name: "Test Name",
    age: "5"
}