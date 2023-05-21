import React, { useReducer } from 'react'
import ScoreButton from '../reducer/ScoreButton-reducer'

export default function AppScoreUseReducer() {
    const [prev, dispatch] = useReducer(ScoreButton, State);

    const ChangeButton = () => {
        const testname = prompt('바꿀 과목을 적으세요.');
        const Score = prompt('점수를 새로 입력하십시요');
        dispatch({ type: 'Change', testname, Score });
    };

    const AddButton = () => {
        const testname = prompt("Test name ?");
        const Score = prompt("What Score ?");
        const grade = prompt("What grade ?");
        dispatch({ type: 'Add', testname, Score, grade });

    };

    const DeleteButton = () => {
        const deleteName = prompt("delete Test name");
        dispatch({ type: 'Delete', deleteName })

    };

    return (
        <div className='ScoreBox'>
            <h1> Use Reducer Score Board </h1>
            <ul className='ScoreList'>
                {prev.test.map((test, id) => (
                    <li key={id}>
                        {test.testname} : {test.Score} / Grade : {test.grade}
                    </li>
                ))}

            </ul>

            <button onClick={ChangeButton}> Chanege Test </button>

            <button onClick={AddButton}> Add Test</button>

            <button onClick={DeleteButton}>delete</button>

            <button onClick={() => {
                console.log(prev)
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
}
