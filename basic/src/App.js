import './App.css';
// import { Fragment } from 'react';

/* JSX 문법 기초 */

// 하나의 Component에는 꼭 하나의 Tag만 반환해야한다.
// 즉 아래와 같이 여러 Tag를 사용하고 싶다면 하나의 Tag에 여러 Tag를 담는다.
function App() {
  const name = "Java Script";
  const Array = ['value1', 'value2', 'value3'];
  return (
    <div>
      {/* Fragment는 JSX 문법에 사용 */}

      <h1 className='class같음'> 테스트 텍스트 </h1>
      <h1 style={{ color: "green" }}> style 테스트 </h1>
      {/* HTML 에서의 class 속성은 JSX문법에서 className 과 동일하다.
          and 당연하게도 HTML과 같이 태그 속성안에서 style 지정가능 but {} 사용 주의 */}

      <p> 기본적으로 javascript 이기때문에 {name} 문법 이 적용된다! </p>
      {/* 대신! JS 문법 사용에는 { } 를 사용해야한다. */}

      {/* ul을 이용한 JS 심화 */}

      <ul>
        {Array.map((item) => (
          <li>{item}</li>
        ))}
        {/* 함수형 태그를 이용해 만든 List */}
      </ul>
    </div>
    // Fragment Tag로 하나의 Component에 하나의 Tag만 적용됨.
  )
}

export default App;
