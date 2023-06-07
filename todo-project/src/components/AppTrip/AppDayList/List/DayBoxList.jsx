import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { BsFillCalendar2DayFill, BsPinMapFill } from 'react-icons/bs'
import { TiThList } from 'react-icons/ti'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import CategoryFilter from './CategoryFilter'


export default function DayBoxList({
  list, UploadDelete,
  DayList, CategoryList }) {
  const [FilterValue, setFilterValue] = useState(CategoryList[0]);
  const FilteredDayList = DayList.filter((e) => e.id !== "Default key");

  const CategoryfilterButton = (e) => {
    setFilterValue(e);
  }

  return (
    <div>
      <CategoryFilter
        CategoryList={CategoryList} FilterFunction={CategoryfilterButton}
        FilterValue={FilterValue}
      />

      {FilteredDayList.map((daylist) => {
        // Day 기준의 filter
        const DayFilter = list.filter((e) => e.Day === daylist.Day)
        // Category 기준의 filter
        const Filtered = OnFilter(DayFilter, FilterValue);


        console.log(Filtered);
        return (
          <ul key={daylist.id}>
            <h1><BsFillCalendar2DayFill /> {daylist.Day} </h1>

            {/* List 맵핑 */}
            {Filtered.map((value) => (
              <li key={value.id}>
                <p><TiThList /> : {value.Category}</p>
                <p><BsPinMapFill /> : {value.Location}</p>
                <p><MdOutlineAccessTimeFilled />{value.StartTime} {value.EndTime}</p>
                <p>{value.Todo}</p>
                {value.Etc && <p>{value.Etc}</p>}
                <button onClick={() => UploadDelete(value.id)}><FaTrashAlt /></button>
              </li>
            ))}
          </ul>)
      })}
    </div>
  )
};

function OnFilter(DefaultList, State) {
  if (State === "All") {
    return DefaultList;
  }
  return DefaultList.filter((list) => list.Category === State);
};


