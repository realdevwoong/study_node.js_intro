const express = require("express");
//express 모듈을 가져와서 사용할 준비
const app = express();
//애플리케이션 객체 생성:
const port = 3000;
//서버 포트를 설정
app.get("/", (req, res) =>{
    res.set({'Content-Type':"text/html; charset=utf-8"});
    res.end("헬로 Express");
});
//첫 번째 매개변수 "/"는 루트 경로를 의미
//두 번째 매개변수는 콜백 함수 (req, res)입니다.
//req: 요청 객체로, 클라이언트의 요청에 대한 정보를 담고 있음
//res: 응답 객체로, 서버가 클라이언트에게 응답을 보낼 때 있음
//이 콜백 함수는 클라이언트가 루트 경로에 GET 요청을 보낼 때 실행됩니다.
//res.set() 메서드는 응답 헤더를 설정하며, 여기서는 콘텐츠 타입을 HTML로 설정하고 UTF-8 인코딩을 사용합니다.
//res.end() 메서드는 응답을 종료하고 클라이언트에게 "헬로 Express"라는 메시지를 보냅니다.
app.listen(port, ()=>{
    console.log(`START SERVER: use ${port}`);
})
//app.listen() 메서드는 지정된 포트에서 서버를 시작하고 클라이언트의 요청을 대기합니다.
//두 번째 매개변수는 콜백 함수 ()로, 서버가 성공적으로 시작되었을 때 실행됩니다.
//이 콜백 함수는 매개변수를 받지 않으며, 단순히 콘솔에 메시지를 출력합니다.