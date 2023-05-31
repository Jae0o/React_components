import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

export default function DoList({ data, OnDelete }) {

    const DeleteButton = () => OnDelete(data.id)


    return (
        <li>
            <input type='checkbox' id='checkBox' />
            <label htmlFor='checkBox'>{data.work}</label>
            <button onClick={DeleteButton}> <FaTrashAlt /> </button>
        </li>
    )
}