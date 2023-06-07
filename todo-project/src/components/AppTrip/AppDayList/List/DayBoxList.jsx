import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { BsFillCalendar2DayFill, BsPinMapFill } from 'react-icons/bs'
import { TiThList } from 'react-icons/ti'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import Filter from './Filter'


export default function DayBoxList({ list, UploadDelete, DayList, FilterCategoryList, FilterLocationList }) {

  const FilteredDayList = DayList.filter((e) => e.id !== "Default key");

  // ================= Cateogry Filter
  const [CategoryCheckList, setCategoryCheckList] = useState([]);

  const UpDateCategoryCheckBox = (e, data) => {
    e.target.checked ?
      setCategoryCheckList(CategoryCheckList.concat([data])) :
      setCategoryCheckList(CategoryCheckList.filter((list) => list !== data));
  };

  // ================= Location Filter
  const [LocationCheckList, setLocationCheckList] = useState([]);

  const UpDateLocationCheckBox = (e, data) => {
    e.target.checked ?
      setLocationCheckList(LocationCheckList.concat([data])) :
      setLocationCheckList(LocationCheckList.filter((list) => list !== data))
  };

  // ======================
  return (
    <div>
      {/* Filter 구역 */}
      <div>
        <Filter name={"Category"} FilterList={FilterCategoryList} UpDateCheckBox={UpDateCategoryCheckBox} CheckList={CategoryCheckList} />
        <Filter name={"Location"} FilterList={FilterLocationList} UpDateCheckBox={UpDateLocationCheckBox} CheckList={LocationCheckList} />
      </div>

      {/* Day 기준 list 구역 */}
      {FilteredDayList.map((daylist) => {
        // Day 기준의 filter
        const DayFilter = list.filter((e) => e.Day === daylist.Day)
        // Category 기준의 filter
        const Filtered = OnFilter(DayFilter, CategoryCheckList, LocationCheckList);

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

function OnFilter(DefaultList, Category, Location) {
  if (Location.length === 0 && Category.length === 0) {
    return DefaultList;
  } else if (Location.length === 0) {
    return DefaultList.filter((data) => Category.includes(data.Category));
  } else if (Category.length === 0) {
    return DefaultList.filter((data) => Location.includes(data.Location));
  } else {
    const Base = DefaultList.filter((data) => Category.includes(data.Category));
    return Base.filter((data) => Location.includes(data.Location));
  };
};


// return DefaultList.filter((data) => Location.includes(data.Location))
