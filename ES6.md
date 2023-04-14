# TIL

# ES6

## Desturcuring(구조 분해 할당)

객체와 배열에 들어있는 값을 가져올때 사용

### [객체]

```
const jikwan = {
name : '지관',
age : 17
};
const people = ['철수', '재석']
```

### [기존]

```
var name = jikwan.name;
var age = jikwan.age;
var chulsu = jikwan[0];
var jaesuck = jikwan[1];
```

### [Destructuring 방식]

```
var {name, age} = jikwan;
console.log(name);

const [chulsu, jaesuck] = people;
```

## map, forEach

배열을 다룰 때 for를 사용하는 대신 map, forEach를 사용할 수 있음
forEach는 return이 없지만 map은 return이 있음

### [객체]

```
var products = [{
    name : '농구공',
    price : 5000
},{
    name : '축구공',
    price : 6000
}]
```

### [기존]

```
for(var i=0; i <products.length; i++){
    var name = products[i].name;
    console.log('제품이름 : ' +name);
}
```

### [forEach]

```
products.forEach(function (product, index){
    console.log((index + 1)+'번째 호출');
    console.log(product);
})
```

### [map]

```
products.map(function(products, index){
    console.log((index+1)+'번째 호출');
    console.log(product);
})
```

```
//
var productNames = products.map((product, index)=>{
    return product.name;
})

var productElements = products.map((product, index) =>{
    return(
        <div>
            <span>{product.name}</span>
        </div>
    )
})
```

## Lamda Function(람다 함수)

() => {}

### [기존]

```
//함수 선언식
function getName(name){
    return `${name} 입니다`
}
//함수 표현식
const getName = function(){

}
```

### [람다 함수 방식]

```
const getName = () => {

}
//람다식의 return 문을 생략할 수 있음
const getName = (name) => `${name} 입니다`
```

## 3항 연산자

3항 연산자는 if대신 사용

### [기본]

```
const language = 'javascipt';

if(language === 'javascipt'){
    console.log('재밌다')
}else{
    console.log('재미없다')
}
```

### [3항연산자]

```
language === 'javascipt' ? console.log(재밌다) : console.log('재미없다')
```

## export, import

`<script>`를 활용해 외부라이브러리를 불러왔지만
import를 사용해 불러올 수도 있음

### [기존]

```
<script src="./hello.js"></script>
```

### [import 방식]

```
import axios from 'axios'
import App from './App.js'
```

### export

```
function App(){
    return <h1>hello</h1>
}

export default  App; //App 함수를 외부에서 사용할 수 있도록 exprot 하는 것
```

[export & import 실행]

```
function funcA(){
	//...
}
function funcB(){
	//...
}
const varC = 'hello';
export {
		a : funcA,
	b : funcB,
	c : varC
}
```

import를 할 때는 {}를 사용

```
import {a,b,c} from './App.js'
```
