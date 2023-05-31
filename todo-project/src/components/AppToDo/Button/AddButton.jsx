import React, { useState } from 'react'
import { v1 as uudiv1 } from 'uuid';

export default function AddButton({ OnAdd }) {
    const [Text, setText] = useState('');

    const OnClick = (e) => {
        e.preventDefault();
        OnAdd({ Key: uudiv1(), work: Text, state: 'active' });
    }

    return (
        <form>
            <input type='text' value={Text}
                onChange={(e) => setText(e.target.value)} />
            <button onClick={OnClick}>+</button>
        </form>
    )
}
