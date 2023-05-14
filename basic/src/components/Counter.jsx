import React, { useState } from 'react'

export default function Counter() {
    const [num, setNum] = useState(0);
    return (
        <div className='CounterBox'>
            <sapn className='CounterNum'>{num}</sapn>
            <button className='CounterButton'
                onClick={() => { setNum(num + 1); }}
            >ADD</button>
        </div>
    )
}
// usestate는 변경이 가능한 값을 반환한다. 또 함수를 리턴하는데 해당 변수를 업데이트 할수 잇는 함수를 반환한다.
// 호출 할때 초기값을 전달하거나 초기값을 전달할 콜백함수를 넣을 수 있다
//[ 상태 값에 접근할 수 있는 변수 , 그 변수를 업데이트 할 수 있는 함수 ]

/* useState */
// react내에서 변경 가능한 component는 useState 를 사용해야한다.

/* 생성 방법 */

// 1. useState에 해당하는 import 불러오기
// import React, { useState } from 'react'

// 2. 초기값 변수와 그 변수를 업데이트할 함수 와 useState속 초기값 지정
// const [ 상태값에 접근 할수있는 변수, 그 변수를 업데이트할 함수 ] = useState( 초기값 );
// Ex : 업데이트 함수는 set+상태값변수 이름

// 3. 변수가 변할 이벤트에 업데이트할 함수를 입력
// <button className='CounterButton'
//    onClick = {() => { setNum(num + 1); }}>
// ADD </button >
// 함수속에 위와같이 업데이트 내용 적기