# TIL
### JSX 문법
- 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나가 감싸는 형태여야함
```
function App(){
    return(
    	<div>
        	<h1>테스트1</h1>
        	<h2>테스트2</h2>
        </div>
    )
}
```
<br>

- 자바스크립트 표현: 자바스크립의 값을 JSX 안에서 렌더링할 수 있다
name의 값을 {name} 과 같이 넣어서 렌더링할 수 있다
```
import React from 'react';

function App() {
	const name = '리액트';
    return (
    <>
    	<h1>{name}</h1>
        <h2>test</h2>
    </>
  );
}

export default App;
```
<br>

- JSX는 if를 사용할 수 없어서 삼항연산자를 대체
```
function App() {
    const name = '리액트';
  return (
   <div>
          {name === '리액트'? (
          	<h1>리액트</h1>
          ) : (
          	<h2>리액트가 아님</h2>
          )}
      
   </div>
      
  );
}
```
<br>

- undefined를 렌더링하지 않아야함 
``` 
function App() {
const a = undefined;
   return a || "undefined";
} 
```
<b>위와 아래는 같음</b>
```
function App() {
const a = undefined;
  return ? null : "undefined";
  }
```
<br>

- JSX 내부에서 undefined를 렌더링 하는 것은 에러가 나지 않음
 ```
   function App() {
   const name = undefined;
   return (
   	<div>{name}</div>
   )
 }
 ```
 <br>
 
- 스타일을 지정할 때 background-color 와 같이 - 문자가 포함된 이름들을, JSX에서 사용할 때에는 -를 없애고 카멜 표기법으로 작성해야 합니다.
- class 속성을 설정할 때 JSX에서는 className으로 표시해야함
```
<div class="classEx1">
    
</div>
```
```
<div className="classEx1">

</div>
```
<br>

- 무조건 닫아주는 태그 /를 <>안에 작성할 것

