import React, { useState } from 'react'
import ContentList from './List/ContentList';
import AddListButton from './List/AddListButton';


const TripList = [{
    id: 2,
    Day: 1,
    Todo: "할일",
    Time: "15:00",
    Location: "장소",
    Category: "tour"
}];

export default function AppDayList() {

    const [List, setList] = useState(TripList);

    const UpDateList = (e) => {
        console.log(e);
        setList();
    }

    return (
        <article>
            <ContentList list={List} />
            <AddListButton UpdateList={UpDateList} />
        </article>
    )
}
