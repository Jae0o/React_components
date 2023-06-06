import React from 'react';

export default function AddDropDownList({ UploadFunction, name }) {

    const OnAdd = (e) => {
        if (e.trim().length === 0) { return alert("ADD Category 를 입력해주세요.") };
        UploadFunction(e);
    }



    return (
        <div>
            <button onClick={() => {
                const ADDdata = prompt(`리스트에 추가할 ${name} 을(를) 입력하세요.`);
                OnAdd(ADDdata);
            }}>{name} 추가</button>

            <button>{name} 삭제</button>
        </div>

    )
}
