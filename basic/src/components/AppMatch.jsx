import React, { useState } from 'react'
import '../Match.css'

export default function AppMatch() {
    const [Text, setText] = useState({
        name: "이름",
        age: "나이",
        major: {
            tool: "music",
            years: "4"
        }
    });
    return (
        <div className='MatchBox'>
            <h1>Name : {Text.name} </h1>
            <h2>Age : {Text.age}</h2>
            <p> 지원 종목 : {Text.major.tool} / 연차 : {Text.major.years}Y</p>
            <button onClick={() => {
                const tool = prompt("변경할 종목 입력.", "ex) sport");
                setText((prev) => ({
                    ...prev, major: { ...prev.major, tool }
                }));
            }}>
                종목 변경</button>
            <button onClick={(prev) => {
                const years = prompt("변경할 연차 입력.", "ex) 4");
                setText((prev) => ({
                    ...prev,
                    major: { ...prev.major, years }
                }));
            }}> 연차 변경</button>
        </div >
    )
}
