import React, { useState } from 'react'
import DoList from './List/DoList';
import AddButton from './Button/AddButton';

const Things = [
    { id: "1", work: "할일 저장소", state: "Active" },
    { id: "2", work: "To Do", state: "Active" },
];

export default function ToDo({ FilterState }) {
    const [List, setList] = useState(Things);

    const AddHandle = (data) => { setList([...List, data]) };

    const DeleteHandle = (data) => {
        setList(
            List.filter((e) => e.id !== data)
        )
    };

    const UpdataHandle = (data) => {
        setList(List.map((list) => list.id === data.id ? data : list))
    };

    const Filtered = OnFilter(List, FilterState);

    return (
        <div>
            <ul>
                {Filtered.map((data) => {
                    return (<DoList key={data.id} data={data} OnDelete={DeleteHandle} OnUpdate={UpdataHandle} />)
                })}
            </ul>
            <AddButton OnAdd={AddHandle} />
        </div>
    )
};

function OnFilter(List, Filter) {
    if (Filter === "All") {
        return List;
    }
    return List.filter(list => list.state === Filter);
};