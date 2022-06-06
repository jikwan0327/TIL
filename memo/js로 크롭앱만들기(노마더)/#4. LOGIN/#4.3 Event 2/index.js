const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//form을 loginForm에 저장
//HTML의 text를 loginInput에 저장
const link = document.querySelector("a");
//a태그를 읽어 link에 저장

function onLoginSubmit(event) {
    //입력창에 입력한 값을 출력하는 함수
    event.preventDefault(); //브라우저의 기본동작을 막아줌
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault(); //a의 기능을 차단
}

loginForm.addEventListener("submit", onLoginSubmit);
//loginButton을 클릭 하였을 때 onLoginBtnClick함수 호출
link.addEventListener("click", handleLinkClick);
