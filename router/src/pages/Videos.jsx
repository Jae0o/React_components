import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Videos() {
  const [Text, setText] = useState("");
  const nav = useNavigate();

  const TextHandle = (e) => { setText(e); }

  const SubmitHandle = (e) => {
    e.preventDefault()
    console.log(nav);
    nav(`/Videos/${Text}`);
    setText("");
  }

  return (
    <div>
      <p>현재 페이지는 Videos 로 검색창에 입력시 다른 페이지로 이동</p>
      <form onSubmit={SubmitHandle}>
        <input
          type='text'
          onChange={(e) => TextHandle(e.target.value)}
        />
      </form>

    </div>
  )
}
