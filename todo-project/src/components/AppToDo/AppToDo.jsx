import React, { useState } from 'react'
import ToDo from './ToDo'
import HeaderButton from './Button/HeaderButton';
import '../../CSS/AppToDo.css'

const Category = ['All', 'Active', 'Completed']
export default function AppToDo() {
    const [State, setState] = useState(Category[0]);

    return (
        <section className='AppToDo'>
            <HeaderButton State={Category} value={State} OnFilter={(e) => setState(e)} />
            <ToDo FilterState={State} />
        </section>
    )
}
