import React, { useState } from 'react'
import Header from './components/ToDoList/ToDoComponenet/Header'
import AppTodoList from "./components/ToDoList/AppTodoList";

const filters = ['all', 'active', 'complete']
export default function App() {
    const [filter, setfilter] = useState(filters[0])

    console.log(filter)
    return (
        <div>
            <Header
                filter={filter}
                filters={filters}
                onChangeFilter={(data) => setfilter(data)} />
            <AppTodoList filter={filter} />
        </div>
    )
}
