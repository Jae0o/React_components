import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { BsFillCalendar2DayFill } from 'react-icons/bs'

export default function DayBoxList({ list, UploadDelete, DayList }) {




    return (
        <div>
            {DayList.map((daylist) => {
                const filter = list.filter((e) => e.Day === daylist.Day)
                return (
                    <ul>
                        <h1><BsFillCalendar2DayFill /> {daylist.Day} </h1>
                        {filter.map((value) => (
                            <li>
                                <p>Category : {value.Category}</p>
                                <p>location : {value.Location}</p>
                                <p>time: {value.Time}</p>
                                <p>{value.Todo}</p>
                                <button onClick={() => UploadDelete(value.id)}><FaTrashAlt /></button>
                            </li>
                        ))}
                    </ul>)
            })}
        </div>
    )
};
