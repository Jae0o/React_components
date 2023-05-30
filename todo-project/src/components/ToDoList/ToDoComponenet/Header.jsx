import React, { useState } from 'react'

export default function Header({ filter, filters, onChangeFilter }) {
    const ChangeComplete = () => { }

    return (
        <div>
            <button>All</button>
            <button>Active</button>
            <button onClick={ChangeComplete}>Complete</button>
        </div>
    )
}
