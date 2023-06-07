import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { BsFillCalendar2DayFill, BsPinMapFill } from 'react-icons/bs'
import { TiThList } from 'react-icons/ti'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import CategoryFilter from './CategoryFilter'


export default function DayBoxList({ list, UploadDelete, DayList, FilterCategoryList }) {

  const FilteredDayList = DayList.filter((e) => e.id !== "Default key");

  // ================= Cateogry Filter
  const [CheckList, setCheckList] = useState([]);

  const UpDateCheckBox = (e, data) => {
    const Text = `${data}`;
    e.target.checked ?
      setCheckList(CheckList.concat([Text])) :
      setCheckList(CheckList.filter((list) => list !== data));
  };

  // ======================
  return (
    <div>
      {/* Category Filter 구역 */}
      <CategoryFilter FilterCategoryList={FilterCategoryList} UpDateCheckBox={UpDateCheckBox} CheckList={CheckList} />

      {/* Day 기준 list 구역 */}
      {FilteredDayList.map((daylist) => {
        // Day 기준의 filter
        const DayFilter = list.filter((e) => e.Day === daylist.Day)
        // Category 기준의 filter
        const Filtered = OnFilter(DayFilter, CheckList);

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
  if (State.length === 0) {
    return DefaultList;
  }
  return DefaultList.filter((data) => State.includes(data.Category))
};


