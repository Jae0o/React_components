import React, { useState } from 'react'
import '../Css/Score.css'

export default function AppScore() {
    const [Score, setScore] = useState(State);

    const ChangeButton = () => {
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
    };

    const AddButton = () => {
        const testname = prompt("Test name ?");
        const Score = prompt("What Score ?");
        const grade = prompt("What grade ?");
        setScore((item) => ({
            ...item,
            test: [...item.test, { testname, Score, grade: grade }]
        }));
    };

    const DeleteButton = () => {
        const deleteName = prompt("delete Test name");
        setScore((e) => ({
            ...e,
            test: e.test.filter((item) =>
                item.testname !== deleteName)
        })
        )
    };

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

            <button onClick={ChangeButton}> Chanege Test </button>

            <button onClick={AddButton}> Add Test</button>

            <button onClick={DeleteButton}>delete</button>

            <button onClick={() => {
                console.log(Score)
            }}>Array 확인용 console.log</button>
        </div >
    )
}

const State = {
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
};