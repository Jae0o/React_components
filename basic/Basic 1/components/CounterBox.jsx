import React, { useState } from 'react'
import Counter from './Counter'

export default function CounterBox() {
    // 공통된 데이터는 필요하고 가장 근접한 부모의 component에 넣는다.
    // 데이터 전달은 props를 통해서 전달한다.
    const [count, setCount] = useState(0);
    const totalClick = () => setCount(prev => prev + 1);
    return (
        <article className='CounterBox'>
            <span className='CounterScore'>
                total Count : {count} {count > 10 ? ' ( 10 초과 )' : ' ( 10미만 )'}
            </span>
            <div className='Counters'>
                <Counter total={count} totalClick={totalClick} counterName={"1"} />
                <Counter total={count} totalClick={totalClick} />
            </div>
        </article>
    )
}
