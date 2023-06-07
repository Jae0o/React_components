import React, { useState } from 'react'
import { v1 as uuidV1 } from 'uuid';
import AddDopDownList from './AddDorpDownList';
import { MdOutlineDownloadDone } from 'react-icons/md'



export default function AddListButton({
  UpdateList,
  PushDay, DayList, DeleteDay,
  PushCategory, CategoryList, DeleteCategory
}) {

  // ---------------------------------------- State 
  const [Todo, setTodo] = useState('');

  const [Location, setLocation] = useState('');
  const [LocationList, setLocationList] = useState(DefaultLocationList);

  const [StartTime, setStartTime] = useState('00:00');
  const [EndTime, setEndTime] = useState('00:00');

  const [Day, setDay] = useState('1');

  const [Category, setCategory] = useState('Tour');


  const [Etc, setEtc] = useState("");

  // ---------------------------------------- Update Function
  const UpdateTodo = (e) => {
    setTodo(e);
  }
  const UpdateLocation = (e) => {
    console.log(e)
    setLocation(e);
  }
  const UpdateDay = (e) => {
    setDay(e)
  }
  const UpdateStartTime = (e) => {
    setStartTime(e);
  }
  const UpdateEndTime = (e) => {
    setEndTime(e);
  }
  const UpdateCategory = (e) => {
    setCategory(e);
  }
  const UpdateEtc = (e) => {
    setEtc(e);
    console.log(Etc)
  }

  // ---------------------------------------- ADD UpdateList Props Function

  const OnSubmit = (e) => {
    e.preventDefault();
    if (Todo.trim().length === 0) {
      return alert(" Todo 에 할일을 적으세요");
    };


    UpdateList(
      {
        id: uuidV1(),
        Day: Day,
        Todo: Todo.trim(),
        StartTime: StartTime,
        EndTime: EndTime,
        Location: Location,
        Category: Category,
        Etc: Etc.trim()
      }
    )
  }

  // ---------------------------------------- Add Delete Location Function

  const UpdateLocationFunction = (SaveData) => {
    if (!LocationList.some((e) => e.Location === SaveData.trim())) {
      setLocationList([...LocationList, { id: uuidV1(), Location: SaveData }])
    } else {
      alert("리스트에 동일한 Location이 존재합니다")
    }
  };

  const DeleteLocation = (e) => {
    if (LocationList.some((local) => local.Location === e)) {
      const filter = LocationList.filter((local) => local.Location !== e);
      setLocationList([...filter]);
    } else {
      alert("리스트에 일치하는 항목이 없습니다.")
    }
  }

  // ---------------------------------------- Return

  return (
    <div>
      <form onSubmit={OnSubmit}>
        {/* 이름 예정 style.DayInput */}
        <div>
          <label htmlFor='DayInput'>Day : </label>
          <select id="DayInput" onChange={(e) => UpdateDay(e.target.value)}>
            {DayList.map((Day) => (
              <option key={Day.id} value={Day.Day}>
                {Day.Day}</option>
            ))}
          </select>
        </div>

        {/* 이름 예정 style.CategoryInput */}
        <div>
          <label htmlFor="CategoryInput">Category : </label>
          <select onChange={(e) => UpdateCategory(e.target.value)}>
            {CategoryList.map((data) => (
              <option key={data.id} value={data.category}>
                {data.category}
              </option>
            ))}
          </select>
        </div>

        {/* 이름 예정 style.LocationInput */}
        <div>
          <label htmlFor="LocationInput">Location</label>
          <select id="LocationInput" onChange={(e) => UpdateLocation(e.target.value)}>
            {LocationList.map((location) => (
              <option key={location.id} value={location.Location}>
                {location.Location}
              </option>
            ))}
          </select>
        </div>

        {/* 이름 예정 style.TimeInput */}
        <div>
          <label htmlFor='StartTimeInput'>Time </label>
          <input type='time' id="StartTimeInput" value={StartTime} onChange={(e) => UpdateStartTime(e.target.value)} />
          <label htmlFor='EndTimeInput'>End </label>
          <input type='time' id="EndTimeInput" value={EndTime} onChange={(e) => UpdateEndTime(e.target.value)} />
        </div>

        {/* 이름 예정 style.TodoInput */}
        <div>
          <label htmlFor='TodoInput'>Todo : </label>
          <input id="TodoInput" type='text' onChange={(e) => UpdateTodo(e.target.value)} />
        </div>

        {/* 이름 예정 style.EtcInput */}
        <div>
          <label htmlFor='EtcInput'>ETC : </label>
          <input id="EtcInput" type='text' onChange={(e) => UpdateEtc(e.target.value)} />
        </div>

        <button> <MdOutlineDownloadDone /> </button>
      </form>

      <div>
        <p> 따로 옵션창 분류해서 만들 예정</p>
        {/* Day */}
        <AddDopDownList UploadFunction={(e) => PushDay(e.trim())} name={"Day"} DeleteFunction={(e) => DeleteDay(e.trim())} />
        {/* Category */}
        <AddDopDownList UploadFunction={(e) => PushCategory(e.trim())} name={"Category"} DeleteFunction={(e) => DeleteCategory(e.trim())} />
        {/* Location */}
        <AddDopDownList UploadFunction={(e) => UpdateLocationFunction(e.trim())} name={"Location"} DeleteFunction={(e) => DeleteLocation(e.trim())} />
      </div>
    </div>

  )
}

const DefaultLocationList = [
  {
    id: "Default key",
    Location: "장소 입력"
  }
]