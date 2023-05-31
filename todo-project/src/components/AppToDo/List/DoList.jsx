import React from 'react'

export default function DoList({ key, work }) {
    return (
        <li key={key}>
            <p>{work}</p>
        </li>
    )
}
