var express = require('express');
var app = express();
var engines = require('consolidate');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// router 설정
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let bbs = [
    {
        id: 1,
        subject: "제목1",
        writer: "피카츄",
        reg_date: "2020-05-20",
        content: "오늘점심은\n김치찌개\n맛없습니다"
    },
    {
        id: 2,
        subject: "제목2",
        writer: "꼬부기",
        reg_date: "2020-05-21",
        content: "오늘점심은\n부대찌개\n또 맛없습니다"
    },
    {
        id: 3,
        subject: "제목3",
        writer: "파이리",
        reg_date: "2020-05-22",
        content: "오늘점심은\n순부두찌개\n진짜 맛없습니다"
    },
    {
        id: 4,
        subject: "제목4",
        writer: "또가스",
        reg_date: "2020-05-23",
        content: "오늘점심은\n보신탕\n이번엔 맛있습니다."
    }
]


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// view 경로 설정
app.set('views', __dirname + '/views');

// 화면 engine을 html로 설정
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
app.use(express.static('public'));
app.use(express.static('views'));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/bbs', (req, res) => {
    return res.json(bbs);
});

app.get('/bbs/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id)
    {
        return res.status(400).json({err: '아이디 틀림'});
    }

    let bd = bbs.filter(bd => bd.id === id)
    if (!bd || bd.length <= 0) {
        return res.status(404).json({err: '등록된 컨텐츠가 엄슴니다.'});
    }
    return res.json(bd[0]);
});


module.exports = app;