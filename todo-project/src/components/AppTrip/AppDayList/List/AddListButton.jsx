import React, { useState } from 'react'
import { v1 as uuidV1 } from 'uuid';
import AddCatogoryList from './AddCatogoryList';



export default function AddListButton({ UpdateList }) {

    // ---------------------------------------- State 
    const [Todo, setTodo] = useState('');
    const [Location, setLocation] = useState('');
    const [Day, setDay] = useState('1');
    const [Time, setTime] = useState('00:00');
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
        console.log(Category)
    }

    // ---------------------------------------- ADD UpdateList Props Function

    const OnSubmit = (e) => {
        e.preventDefault();
        if (Todo.trim().length === 0) {
            return alert(" Todo 에 할일을 적으세요");
        }
        console.log(
            {
                id: uuidV1(),
                Day: Day,
                Todo: Todo.trim(),
                Time: Time,
                Location: Location,
                Category: "Home"
            }
        )
    }

    // ---------------------------------------- AddCategory Function

    const UpdateCategoryFcuntion = (SaveData) => {
        if (!CategoryList.some((e) => e.category === SaveData.trim())) {
            setCategoryList([...CategoryList, { id: uuidV1(), category: SaveData.trim() }])
        } else {
            alert("동일한 Category가 존재합니다.");
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
                        <option value="1"> 1 Day</option>
                        <option value="2"> 2 Day</option>
                        <option value="3"> 3 Day</option>
                        <option value="4"> 4 Day</option>
                    </select>
                </div>
                {/* 이름 예정 style.TimeInput */}
                <div>
                    <label>Time : </label>
                    <input type='time' value={Time} onChange={(e) => UpdateTime(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="LocationInput">Location</label>
                    <input id="LocationInput" type='text' onChange={(e) => UpdateLocation(e.target.value)} />
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

            <AddCatogoryList UpdateFunction={(e) => UpdateCategoryFcuntion(e)} List={CategoryList} />
        </div>

    )
}


const DefaultCategoryList = [
    {
        id: 1,
        category: "Tour"
    },
    {
        id: 2,
        category: "Activity"
    },
    {
        id: 3,
        category: "Home"
    }
];