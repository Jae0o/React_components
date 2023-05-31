import React, { useState } from 'react'




const Things = [{
    key: "nobody",
    work: "할일 저장소",
    state: "active"
}]

export default function () {
    const [List, setList] = useState(Things);

    console.log(List)
    return (
        <div>
            <ul>
                {List.map((e) => (
                    <li key={e.key}>
                        <input type='checkbox' />
                        <p>{e.work}</p>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
