import React, { useState } from 'react'
import '../Css/Wrap.css'

export default function AppWrap() {
    return (
        <div className='BaseBox'>
            <Wrap>
                <p>속에 컨텐츠를 직접 넣어도된다.</p>
                <ToggleButton name={"Test Name"} />
                <TestImage src={'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'}
                    size={200} alt={"Test"} />
            </Wrap>

            <Wrap>
                <AppMatch />
            </Wrap>
        </div>
    )
}

function Wrap({ children }) {
    return (
        <div className='Wrap'>
            {children}
        </div>
    );
};

function ToggleButton({ name }) {
    return (
        <button> {name} </button>
    );
}

function TestImage({ size, src, alt }) {
    return (
        <img src={src} width={size} height={size} alt={alt} />
    )
}

function AppMatch() {
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