import React, { useState } from 'react';

export default function AddCatogoryList({ UpdateFunction, List }) {
    const [SaveData, setSaveData] = useState("");

    const ADDFunction = (e) => {
        setSaveData(e)
    };

    const OnCategorySubmit = (e) => {
        e.preventDefault();
        if (SaveData.trim().length === 0) { return alert("ADD Category 를 입력해주세요.") };
        UpdateFunction(SaveData);
        setSaveData("")
    }



    return (
        <div>
            <form onSubmit={OnCategorySubmit}>
                <label> ADD Category : </label>
                <input type="text" onChange={(e) => ADDFunction(e.target.value)} value={SaveData} />
                <button > ADD Category</button>
            </form>
            <button onClick={() => console.log(List)}>Test</button>
        </div>
    )
}
