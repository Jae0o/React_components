import React from 'react'

export default function Todo({ id, work, state, Delete, UpDate }) {

    const EventClick = () => {
        Delete({ id, work, state })
    };

    const ChangeBox = (e) => {
        UpDate({ id, work, state: e.target.checked ? 'completed' : 'active' })
    };

    return (
        <li key={id} >
            <div>
                <input type='checkbox' id='checkBox'
                    checked={state === 'completed'} onChange={ChangeBox} />
                <label htmlFor='checkBox'>{work}</label>
            </div>
            <button className='DeleteButton' onClick={EventClick}>Delete</button>
        </li >
    )
}
