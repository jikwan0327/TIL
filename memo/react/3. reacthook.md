# TIL

# React Hooks

## useEffect

기본 형태:
useEffect(function, deps )

-   function: 수행하고자 하는 작업
-   deps : 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열

### useEffect 함수 불러오기

```
import React, { useEffect } from 'react';
```

### rerendering 될 때

1. 처음에만 실행

```
useEffect(() => {
    console.log('처음에만 실행된다');
}, []) //배열을 생략한다면 리렌더링 될 때 마다 실행
```

2. update 될 때 (특정 props, state가 바뀔 때)

3. Component가 사라질 때 & update 되기 직전
