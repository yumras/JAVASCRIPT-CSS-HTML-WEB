
var express = require('express');
var mysql = require('mysql');
var http = require('http');
var app = express();

//mysql 접속 정보
var connection = mysql.createConnection({
  host: 'localhost'
  , port: 3306
  , user: 'root'
  , password: 'root'
  , database: 'test'
});

//서버를 포트800번으로 연결하다
var server = http.createServer(app).listen(800);
connection.connect();
console.log("hello nodejs");

app.get('/test', function (req, res) {
  res.send('hello 이한민');
});

connection.query('select * from member',
  function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
  }
);

app.get('/cssPractice', function (req, res) {
  res.sendfile('css실습.html');
});

app.get('/getAllMember', function (req, res) {
  connection.query('select * from member',
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

// authcode가 1이거나 2인사람
app.get('/getAuthcode1or2', function (req, res) {
  connection.query('select * from member where authcode = 1 or authcode = 2',
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

// 글을 쓴 적이 있는 사람의 이름 목록
app.get('/getNameFromBoard', function (req, res) {
  connection.query('select name from member where id in (select id from board)',
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

// 권한이 '관리자'인 사람의 이메일 주소만 ( 0이라는 코드를 쓰면 안됨)
app.get('/getEmailOfAdmin', function (req, res) {
  connection.query('select email from member where authcode = \
  (select authcode from auth where authority = "관리자")',
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

// 이메일 주소가 가장 긴 사람
app.get('/getLongestEmail', function (req, res) {
  connection.query('select * from member where length(email) = \
  (select max(length(email)) from member)',
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});
