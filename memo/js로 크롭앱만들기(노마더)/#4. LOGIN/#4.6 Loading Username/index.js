const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//form을 loginForm에 저장
//HTML의 text를 loginInput에 저장
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
//css를 이용해 숨겨줌
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //입력창에 입력한 값을 출력하는 함수
    event.preventDefault(); //브라우저의 기본동작을 막아줌
    loginForm.classList.add("hidden"); //로그인창을 숨김
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
//loginButton을 클릭 하였을 때 onLoginBtnClick함수 호출

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(username);
}
