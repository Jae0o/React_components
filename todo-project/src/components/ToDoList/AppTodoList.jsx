import React, { useState } from 'react'
import AddList from './ToDoComponenet/AddList';
import Todo from './ToDoComponenet/Todo'


const State = [{
    id: 'n24214213123',
    work: "할일을 추가하세요",
    state: "active"
}]

export default function AppTodoList({ filter }) {
    const [Data, setData] = useState(State);

    const EventAdd = (AddData) => {
        setData([...Data, AddData]);
    };

    const EventUpdate = (AddData) => {
        setData(
            Data.map((text) => text.id === AddData.id ? AddData : text));
    };

    const EventDelete = (text) => {
        setData(() => [...Data.filter((ID) => ID.id !== text.id)])
    };
    console.log(Data);

    return (
        <div>
            <ul>
                {Data.map((data) => (
                    <Todo id={data.id} work={data.work} state={data.state}
                        Delete={EventDelete} UpDate={EventUpdate} />
                ))}
            </ul>
            <AddList OnAdd={EventAdd} />
        </div>
    )
}