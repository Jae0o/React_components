import React from 'react'

export default function ContentList({ list }) {

    const TestFunction = () => {
        console.log(list);
    };
    return (
        <ul>
            {list.map((value) => (
                <li key={value.id}>

                    <p>Day : {value.Day}</p>
                    <p>local : {value.Local}</p>
                    <p>time: {value.Time}</p>
                    <p>{value.Todo}</p>

                    <button onClick={TestFunction}> delete</button>
                </li>
            ))}
        </ul>
    )
};
