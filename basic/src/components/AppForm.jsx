import React, { useState } from 'react'
import '../Css/Form.css'

export default function AppForm() {
    const [Form, setForm] = useState({ ID: "", PW: "" })

    const SubmitHandle = (e) => { e.preventDefault() };

    const StateHandle = (e) => {
        const { name, value } = e.target;
        setForm({ ...Form, [name]: value });
    }

    return (
        <form className='FormBox' onSubmit={SubmitHandle}>
            <h1>Test Form</h1>

            <label htmlFor='ID'> ID </label>
            <input id='ID' type='text' name='ID' value={Form.ID}
                onChange={StateHandle} />
            <label htmlFor='PW'> Password </label>
            <input id='PW' type='password' name='PW' value={Form.PW}
                onChange={StateHandle} />
            <button onClick={() => console.log(Form)}>Submit</button>
        </form>
    )
}
