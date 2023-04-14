# TIL

# AJAX

## AJAX란

비동기 자바스크립트와 XML (<strong>A</strong>synchronous <strong>J</strong>avaScript <strong>A</strong>nd <strong>X</strong>ML)의 약자임
서버와 통신하기 위해 XMLHttpsRequest 객체를 사용하는 것

```
//example
$.ajax ({
    url : "url",
    type = "GET", //http 요청 방식
    async : true, //동기 비동기 여부(true=비동기, false=동기)
    cache : true, //캐시 여부
    timeout : 3000, //요청 제한 시간
    data : {key : value}, //요청시 포함될 데이터
    dataType : "json", //응답 데이터 형식(명시 안하면 자동 추측)
    success : function(data, status, xhr) {
        //정상 응답시 succss 콜백 호출
    }
    error : function(xhr, status, error) {
        // 응답 받지 못했을 때
    }
    complete : function(xhr, status) {
        //success 와 error 콜백이 호출될 후 반드시 호출

    }
})
```
