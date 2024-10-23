const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    //urlString: 파싱할 URL 문자열입니다. 이 부분은 필수 인자이며, 예를 들어 http://example.com/path?name=value와 같은 형식이 됩니다.
    //parseQueryString: (선택적) 이 매개변수가 true로 설정되면 쿼리 문자열이 객체 형태로 파싱됩니다. 기본값은 false이며, 이 경우 쿼리 문자열은 문자열 그대로 반환됩니다.
    //예를 들어:쿼리 문자열: ?name=value&age=30 true를 주면 { name: 'value', age: '30' } 형태의 객체로 반환됩니다.false를 주면 'name=value&age=30'라는 문자열로 반환됩니다.
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (path in urlMap){
        urlMap[path](req,res);
    }else{
        notFound(req,res);
    }
}).listen(3000, () => console.log("라우터를 만들어보자"));

const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query;
    res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
}

const feed = (req, res) => {
    res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
    </ul>`);
}

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
};

const urlMap={
    "/":(req, res) => res.end("HOME"),
    "/user":user,
    "/feed":feed,
};