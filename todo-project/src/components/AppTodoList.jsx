import React, { useEffect, useState } from 'react'
import '../CSS/List.css'

export default function AppTodoList() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        fetch(`data/ListData.json`)
            .then((E) => E.json())
            .then((D) => { setData(D); });
    }, []);

    const EventDelete = () => { };

    const EventAdd = () => {
        setData((AddData) => {
            console.log(AddData);
        })
    };

    return (
        <div>
            <ul>
                {Data.map((Data) => (
                    <li className='List' key={Data.id}>
                        <div>
                            <input type='checkBox' />
                            <p>{Data.work}</p>
                        </div>
                        <button className='DeleteButton' onClick={EventDelete}> Delete</button>
                    </li>
                ))}
            </ul>

            <form onSubmit={EventAdd}>
                <input type="text" name='Todo' />
                <input type='submit' value='+' />
            </form>
        </div>
    )
}