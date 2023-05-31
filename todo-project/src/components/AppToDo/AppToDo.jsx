import React, { useState } from 'react'
import ToDo from './ToDo'
import HeaderButton from './Button/HeaderButton';

const Category = ['All', 'Active', 'Completed']
export default function AppToDo() {
    const [State, setState] = useState(Category[0]);

    return (
        <div>
            <HeaderButton State={Category} value={State} OnFilter={(e) => setState(e)} />
            <ToDo FilterState={State} />
        </div>
    )
}
