import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

export default function DoList({ data, OnDelete, OnUpdate }) {

    const DeleteButton = () => OnDelete(data.id);

    const UpdateButton = (e) => {
        const state = e.target.checked ? "Completed" : "Active";
        console.log(e);
        OnUpdate({ ...data, state: state });
    };

    return (
        <li>

            <input
                type='checkbox'
                id={data.id}
                checked={data.state === "Completed"}
                onChange={UpdateButton} />

            <label htmlFor={data.id}>{data.work}</label>

            <button onClick={DeleteButton}><FaTrashAlt /></button>

        </li>
    )
}