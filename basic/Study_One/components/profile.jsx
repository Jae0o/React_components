//compnent 제작 방법
//props 사용 방법  = profile.jsx and AppProfile.jsx 파일 2개를 동시 참고

import Avarta from "./Avarta";

function Profile({ Image, name, job, New }) {
    // 함수를 이용해서 하나의 component 제작이 가능하다.
    return (
        // 리턴 값 이후 앞서 말했듯이 하나의 tag 속에 여러 tag를 담아 출력될 내용을 만든다.
        <div className='ComProfile'>
            <Avarta Image={Image} New={New} />
            {/* JavaScript Operator_apply 참고 */}
            <h1> {name} </h1>
            <p> {job} </p>
            {/* props를 통해 받을 속성을 명시 하여 재사용성을 높인다 */}
        </div>
    )
};

export default Profile;
// export를 통해 사용 가능하게 만들어 준다.

// Extension - React snippet 을 검새후 설치하면
// rfc 를 사용 가능한다 rfc는 자동으로 component 형식을 만들어준다

// import React from 'react'

// export default function profile() {
//   return (
//     <div>profile</div>
//   )
// }
