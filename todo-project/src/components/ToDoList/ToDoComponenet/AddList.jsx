import React, { useState } from 'react'
import { v1 as uuidv1 } from 'uuid';


export default function AddList({ OnAdd }) {
    const [Text, setText] = useState('');

    const EventChange = (e) => setText(e.target.value);

    const EventClick = (e) => {
        e.preventDefault();
        if (Text.trim().length === 0) { return; };
        OnAdd({ id: uuidv1(), work: Text, state: 'active' });
    }

    return (
        <form onSubmit={EventClick}>
            <input type='text' onChange={EventChange} value={Text} />
            <button> + </button>
        </form>
    )
}
