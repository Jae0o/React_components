import React from 'react';

export default function AddDropDownList({ UploadFunction, name, DeleteFunction }) {

  const OnAdd = (e) => {
    if (e.trim().length === 0) { return alert(`${name} 에는 공백이 불가능합니다. `) };
    UploadFunction(e);
  }

  const OnDelete = (e) => {
    if (e.trim().length === 0) { return alert(`${name} 에는 공백이 불가능합니다. `) };
    DeleteFunction(e);
  }


  return (
    <div>
      <button
        onClick={() => {
          const ADDdata = prompt(`리스트에 추가할 ${name} 을(를) 입력하세요.`);
          OnAdd(` ${ADDdata}`);
        }}>{name} 추가</button>

      <button
        onClick={() => {
          const DeleteData = prompt(`리스트에서 제거할 ${name} 을(를) 입력하세요.`);
          OnDelete(` ${DeleteData}`);
        }}>{name} 삭제</button>
    </div>

  )
}
