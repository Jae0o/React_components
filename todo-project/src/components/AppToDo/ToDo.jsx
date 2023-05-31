import React, { useState } from 'react'
import DoList from './List/DoList';
import AddButton from './Button/AddButton';



const Things = [{
    key: "nobody",
    work: "할일 저장소",
    state: "active"
}]

export default function ToDo() {
    const [List, setList] = useState(Things);

    const AddHandle = (data) => { setList([...List, data]) }

    console.log(List)
    return (
        <div>
            <ul>
                {List.map((data) => (
                    <DoList key={data.key} work={data.work} />
                ))}
            </ul>
            <AddButton OnAdd={AddHandle} />
        </div>
    )
}
