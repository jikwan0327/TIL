const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//form을 loginForm에 저장
//HTML의 text를 loginInput에 저장
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
//css를 이용해 숨겨줌

function onLoginSubmit(event) {
    //입력창에 입력한 값을 출력하는 함수
    event.preventDefault(); //브라우저의 기본동작을 막아줌
    loginForm.classList.add("hidden"); //로그인창을 숨김
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); //숨어있던 h1태그를 보이게함
}

loginForm.addEventListener("submit", onLoginSubmit);
//loginButton을 클릭 하였을 때 onLoginBtnClick함수 호출
