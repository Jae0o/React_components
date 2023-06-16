import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function VideosDetail() {
  const { ID } = useParams();

  return (
    <div>
      <p>VideosDetail  현재 ID : {ID}</p>
      <Link to='/Videos'> 뒤로가기</Link>
    </div>

  )
}
