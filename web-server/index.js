const express = require('express')
const path=require("path");
const app = express()

//requestのbodyの値を使えるようにする
app.use(express.urlencoded({extended: false}))
//public配下をフロントエンドに設定する
app.use(express.static(path.join(__dirname, "public")));

app.get('/manage', function (req, res) {
    console.log("管理者ページの出力");
    res.send('<h1>管理用ページです!</h1><h3>直書きでhtmlを返却することもできます</h3>')
});

app.post('/api/v1/quiz', function (req, res) {
    const answer=req.body.answer;
    if(answer==="2"){
        //publicの中の相対パス
        res.redirect("/correct.html");
    }else{
        res.send("<h1>不正解、、</h1>");
    }
});

app.get('/api/v1/users', function (req, res) {
    console.log("APIでユーザ情報取得");
    res.send({
        name: "Mike",
        age: 30
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("I am running!");
});

console.log("最終行です");