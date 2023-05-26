import React, { useEffect, useState } from 'react'
import '../Css/LoadingError.css'

export default function AppLoadingError() {
    const [State, setState] = useState(false);
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState();

    const ChangeState = () => setState((e) => !e);

    useEffect(() => {
        setLoading(true);
        fetch(`data/${State ? "Cloth" : "Computer"}.json`)
            .then((e) => e.json())
            .then((D) => { setData(D); })
            .catch(() => setError("에러 발생"))
            .finally(() => setLoading(false))
    }, [State])


    if (Loading) return <p>Loading</p>;
    if (Error) return <p>{Error}</p>

    return (
        <div className='LoadingBox'>
            <h2>Not Use Custom Hook</h2>
            <div>
                <ul>
                    {Data.map((e) => (
                        <li id={e.id}>
                            <h5>{e.name}</h5>
                            <p>{e.price}</p>
                        </li>
                    ))}
                </ul>
                <button className='button' onClick={ChangeState}>
                    Change
                </button>
                <p>State : {State.toString()}</p>
            </div>
        </div>
    )
}
