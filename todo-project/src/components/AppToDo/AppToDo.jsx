import React, { useState } from 'react'
import ToDo from './ToDo'
import HeaderButton from './Button/HeaderButton';

const state = ['all', 'active', 'completed']
export default function AppToDo() {
    const [State, setState] = useState(state[0]);
    return (
        <div>
            <HeaderButton State={State} />
            <ToDo />
        </div>
    )
}
