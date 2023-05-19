import React, { useState } from 'react'
import '../Score.css'

export default function AppScore() {
    const [Score, setScore] = useState({
        name: "student",
        class: "4",
        test: [{
            testname: "Math",
            Score: "50",
            grade: "F"
        },
        {
            testname: "English",
            Score: "70",
            grade: "C"
        }]

    })

    return (
        <div className='ScoreBox'>
            <h1> Score Board </h1>
            <ul className='ScoreList'>
                {Score.test.map((test, id) => (
                    <li key={id}>
                        {test.testname} : {test.Score} / Grade : {test.grade}
                    </li>
                ))}

            </ul>
            <button onClick={() => {
                const target = prompt('바꿀 과목을 적으세요.');
                const TScore = prompt('점수를 새로 입력하십시요');
                setScore((prev) => ({
                    ...prev,
                    test: prev.test.map((value) => {
                        if (value.testname === target) {
                            return { ...value, Score: TScore }
                        };
                        return value;
                    })
                }))
            }}>
                Change Math </button>
        </div >
    )
}
