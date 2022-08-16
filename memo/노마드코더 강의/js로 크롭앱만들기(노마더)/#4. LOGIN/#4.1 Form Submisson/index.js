const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
//HTML의 버튼과 text를 각각 loginInput과 loginButton에 저장

function onLoginBtnClick() {
    //입력창에 입력한 값을 출력하는 함수
    const username = loginInput.value;
    // if (username === "") {
    //     alert("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long.");
    // }
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
//loginButton을 클릭하였을 때 onLoginBtnClick함수 호출
