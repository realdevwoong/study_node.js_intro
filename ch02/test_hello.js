import http from "k6/http"

export const options = {
    vus:100, // 가상 유저를 설정하는 항목
    duration:"10s",//유저 100명이 10초 동안 계속 요청을 보냄 
}

export default function(){
    http.get("http://localhost:8000");
}
//성능 테스트 시 실행되는 함수
//http GET메서드를 사용해서 http://localhost:8000에 요청을 보낸다는 의미


