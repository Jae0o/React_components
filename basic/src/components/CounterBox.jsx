import React, { useState } from 'react'
import Counter from './Counter'

export default function CounterBox() {
    const [count, setCount] = useState(0);
    const totalClick = () => setCount(prev => prev + 1);
    return (
        <article className='CounterBox'>
            <span className='CounterScore'>
                total Count : {count} {count > 10 ? ' ( 10 초과 )' : ' ( 10미만 )'}
            </span>
            <div className='Counters'>
                <Counter total={count} totalClick={totalClick} />
                <Counter total={count} totalClick={totalClick} />
            </div>
        </article>
    )
}
