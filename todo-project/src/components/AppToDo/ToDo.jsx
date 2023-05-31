import React, { useState } from 'react'
import DoList from './List/DoList';
import AddButton from './Button/AddButton';



const Things = [
    { id: "1", work: "할일 저장소", state: "active" },
    { id: "2", work: "To Do", state: "active" },
]

export default function ToDo() {
    const [List, setList] = useState(Things);

    const AddHandle = (data) => { setList([...List, data]) }

    const DeleteHandle = (data) => {
        setList(
            List.filter((e) => e.id !== data)
        )
    }

    console.log(List)
    return (
        <div>
            <ul>
                {List.map((data) => {
                    return (
                        <DoList key={data.id} data={data} OnDelete={DeleteHandle} />
                    )
                })}
            </ul>
            <AddButton OnAdd={AddHandle} />
        </div>
    )
}
