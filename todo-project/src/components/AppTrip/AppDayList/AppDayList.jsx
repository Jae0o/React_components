import React, { useState } from 'react'
import DayBoxList from './List/DayBoxList';
import AddListButton from './List/AddListButton';
import { v1 as uuidV1 } from 'uuid';


const TripList = [{
    id: 2,
    Day: "1",
    Todo: "할일",
    Time: "15:00",
    Location: "장소",
    Category: "Tour"
}];

const DefaultDaylist = [
    {
        id: 1,
        Day: "1"
    }
]

export default function AppDayList() {
    // ------------------------------------ Day

    const [DayList, setDayList] = useState(DefaultDaylist);

    const UpdateDayFunction = (SaveDay) => {
        if (!DayList.some((e) => e.Day === SaveDay)) {
            setDayList([...DayList, { id: uuidV1(), Day: SaveDay }])
        } else {
            alert("리스트에 동일한 Category가 존재합니다.");
        }
    };

    // ------------------------------------ List

    const [List, setList] = useState(TripList);

    const AddList = (e) => { setList([...List, e]); }

    const DeleteList = (e) => {
        const Filter = List.filter((list) => list.id !== e);
        setList([...Filter]);
    }


    // ------------------------------------- Return

    return (
        <article>
            <DayBoxList list={List} UploadDelete={DeleteList} DayList={DayList} />
            <AddListButton UpdateList={AddList} PushDay={UpdateDayFunction} DayList={DayList} />
        </article>
    )
}
