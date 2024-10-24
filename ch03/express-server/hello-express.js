const express = require("express");
//express 모듈을 가져와서 사용할 준비
const app = express();
//애플리케이션 객체 생성:
const port = 3000;
//서버 포트를 설정
app.listen(port,()=>{
    console.log("익스프레스로 라우터 리팩터링하기");
})
app.get("/",(_,res)=>res.end("HOME"));
//그냥 반환만 하기 때문에 _로 써줌 
app.get("/user", user);
app.get("/feed", feed);

function usr(req,res){
    const user = url.parse(req.url,true).query;
    res.json(`[user] name: ${user.name}, age:${user.age}`);
}
function feed(_,res){
    res.json(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
}