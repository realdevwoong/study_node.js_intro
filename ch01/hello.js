// HTTP 모듈을 불러와 http 변수에 할당
// 이 모듈은 Node.js에 내장되어 있으며, HTTP 서버를 만들 때 사용
const http = require("http");

// 요청 횟수를 세기 위한 변수를 초기화
let count = 0;

// HTTP 서버를 생성
// createServer 메서드는 요청(req)과 응답(res)을 처리하는 콜백 함수를 인자로 받음
const server = http.createServer((req, res) => {
    // 서버에 요청이 올 때마다 count를 1씩 증가시키고 콘솔에 출력
    console.log((count += 1));

    // HTTP 상태 코드를 200(성공)으로 설정
    res.statusCode = 200;

    // 응답 헤더의 Content-Type을 일반 텍스트로 설정
    res.setHeader("Content-Type", "text/plain");

    // 클라이언트에게 "hello"라는 텍스트를 보냄
    res.write("hello\n");

    // 2초(2000밀리초) 후에 실행될 코드를 예약
    setTimeout(() => {
        // 2초 후에 "Node.js"라는 텍스트를 보내고 응답을 종료
        res.end("Node.js");
    }, 2000);
});

// 서버를 8000번 포트에서 실행하도록 설정
// 서버가 실행되면 콘솔에 "Hello Node.js"를 출력
server.listen(8000, () => console.log("Hello Node.js"));

//의문점 
//res.write의 hello와  res.end의 Node.js는 왜 써줄까?
//res.write("hello\n")
//res.write("hello\n")는 클라이언트(웹 브라우저)에게 보내는 응답의 일부
//브라우저에서 이 서버에 접속하면 화면에 "hello"가 표시, \n은 줄바꿈 문자로, 브라우저에서는 보통 무시
//res.end("Node.js")
//이것도 클라이언트에게 보내는 응답의 일부
//"Node.js"라는 텍스트를 클라이언트에게 보내고 응답을 종료
//브라우저에서는 "hello" 다음에 "Node.js"가 표시
//res.end()는 응답을 종료하는 역할
//console.log("Hello Node.js")
//이것은 서버 측 콘솔에 출력되는 메시지
//서버가 시작될 때 한 번만 출력
//클라이언트(브라우저)에서는 이 메시지를 볼 수 없음
//요약
//res.write()와 res.end()의 내용은 클라이언트(브라우저)에 표시
//console.log()의 내용은 서버 측 콘솔에만 표시되며, 클라이언트는 볼 수 없음
