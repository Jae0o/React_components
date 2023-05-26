import React, { useState } from 'react'
import '../Css/Document.css'

export default function TestDocument() {
    const [State, setState] = useState(false);

    const TestChange = () => {
        console.log(Doc);
        setState((e) => !e)
    };

    const Doc = document.getElementsByClassName('TestBox');
    return (
        <div className={'DocumentBox'}>
            <div className={'TestBox'} style={{ backgroundColor: "white" }}>
                <button onClick={TestChange}>
                    Change {State.toString()}
                </button>
            </div>
        </div>
    )
}

