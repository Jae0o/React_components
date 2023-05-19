import React, { useEffect, useState } from 'react'

export default function Product() {
    const [Json, setJson] = useState([]);
    const [Checked, setChecked] = useState(false);
    const onChanged = () => setChecked((prev) => !prev);

    useEffect(() => {
        fetch(`data/${Checked ? "Computer" : "Cloth"}.json`)
            .then(item => item.json())
            .then((data) => { setJson(data) });
    }, [Checked])


    return (
        <div>
            <input id="checkBox" type='checkbox' value={Checked} onChange={onChanged} />
            <label htmlFor='checkBox'> 목록 바꾸기 </label>
            <ul>
                {Json.map((Price) => (
                    <li key={Price.id}>
                        <h3>{Price.name}</h3>
                        <p>{Price.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
