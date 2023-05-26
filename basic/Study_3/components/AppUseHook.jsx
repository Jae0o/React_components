import React, { useState } from 'react'
import useMakeHook from '../Hooks/useMakeHook';

export default function AppUseHook() {
    const [State, setState] = useState(false);
    const [Data, Loading, Error] = useMakeHook({ State: State });

    const ChangeState = () => setState((e) => !e);

    if (Loading) return <p>Loading</p>;
    if (Error) return <p>{Error}</p>

    return (
        <div className='LoadingBox'>
            <h2> Use Custom Hook</h2>
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
