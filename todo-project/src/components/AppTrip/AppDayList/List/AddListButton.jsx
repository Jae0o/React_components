import React, { useState } from 'react'
import { v1 as uuidV1 } from 'uuid';
import AddDopDownList from './AddDorpDownList';



export default function AddListButton({ UpdateList, PushDay, DayList }) {

    // ---------------------------------------- State 
    const [Todo, setTodo] = useState('');

    const [Location, setLocation] = useState('');
    const [LocationList, setLocationList] = useState(DefaultLocationList);

    const [Time, setTime] = useState('00:00');

    const [Day, setDay] = useState('1');

    const [Category, setCategory] = useState('Tour');
    const [CategoryList, setCategoryList] = useState(DefaultCategoryList);

    // ---------------------------------------- Update Function
    const UpdateTodo = (e) => {
        setTodo(e);
    }
    const UpdateLocation = (e) => {
        setLocation(e);
    }
    const UpdateDay = (e) => {
        setDay(e)
    }
    const UpdateTime = (e) => {
        setTime(e);
    }
    const UpdateCategory = (e) => {
        setCategory(e);
    }

    // ---------------------------------------- ADD UpdateList Props Function

    const OnSubmit = (e) => {
        e.preventDefault();
        if (Todo.trim().length === 0) {
            return alert(" Todo 에 할일을 적으세요");
        }
        UpdateList(
            {
                id: uuidV1(),
                Day: Day,
                Todo: Todo.trim(),
                Time: Time,
                Location: Location,
                Category: Category
            }
        )
    }
    // ---------------------------------------- Add Day Function


    // ---------------------------------------- Add Location Function

    const UpdateLocationFunction = (SaveData) => {
        if (!LocationList.some((e) => e.Location === SaveData.trim())) {
            setLocationList([...LocationList, { id: uuidV1(), Location: SaveData }])
        } else {
            alert("리스트에 동일한 Location이 존재합니다")
        }
    };

    // ---------------------------------------- Add Category Function

    const UpdateCategoryFcuntion = (SaveData) => {
        if (!CategoryList.some((e) => e.category === SaveData.trim())) {
            setCategoryList([...CategoryList, { id: uuidV1(), category: SaveData.trim() }])
        } else {
            alert("리스트에 동일한 Category가 존재합니다.");
        }
    };

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
                {/* 이름 예정 style.TimeInput */}
                <div>
                    <label htmlFor='TimeInput'>Time : </label>
                    <input type='time' id="TimeInput" value={Time} onChange={(e) => UpdateTime(e.target.value)} />
                </div>

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

                <div>
                    <label htmlFor='TodoInput'>Todo : </label>
                    <input id="TodoInput" type='text' onChange={(e) => UpdateTodo(e.target.value)} />
                </div>

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
                <button> ADD </button>
            </form>

            <div>
                <p> 따로 옵션창 분류해서 만들 예정</p>
                {/* Day */}
                <AddDopDownList UploadFunction={(e) => PushDay(e)} name={"Day"} />
                {/* Category */}
                <AddDopDownList UploadFunction={(e) => UpdateCategoryFcuntion(e)} name={"Category"} />
                {/* Location */}
                <AddDopDownList UploadFunction={UpdateLocationFunction} name={"Location"} />
            </div>
        </div>

    )
}


const DefaultCategoryList = [
    {
        id: 1,
        category: "카테고리 입력"
    }
];

const DefaultLocationList = [
    {
        id: 1,
        Location: "장소 입력"
    }
]