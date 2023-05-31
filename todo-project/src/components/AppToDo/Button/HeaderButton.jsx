import React from 'react'

export default function HeaderButton({ State, value, OnFilter }) {

    return (
        <header>
            <ul>
                {State.map((data, index) => (
                    <li key={index}>
                        <button onClick={() => OnFilter(data)}>
                            {data}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    )
}
