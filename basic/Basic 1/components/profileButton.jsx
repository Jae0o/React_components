import React from 'react'

export default function ProfileButton() {
    const ButtonClick = function () { alert("변수와 함수를 이용해 가능") };
    // 변수에 함수를 지정하여 사용 할 수 도 있음.
    return (
        <div>
            <button onClick={(event) => {
                alert("직접 입력");
                console.log(event);
            }}> 직접 입력 </button>
            {/* 버튼의 이벤트 속에 직접 함수를 넣어 실행할 내용을 지정할 수 있고, log를 통해
            어떤 이벤트가 발생했는지 어디서 됐는지등 다양한 속성을 볼 수 있음. */}

            <button onClick={ButtonClick}> 변수와 함수를 이용 </button>
        </div >
    )
    /* 주의점 */
    // 변수로써 지정하여 변수이름() 이라고 사용하면 함수가 실행이 되고 해당 값이 변수에 그대로 저장이됨.
    // 꼭! 변수의 참조값 만으로 실행해야함. JavaScript 기본 문법
}
