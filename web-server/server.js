const express = require('express')
const path=require("path");
const app = express()
const dbController = require("./server/dbController");
const blobController = require("./server/blobController");

//requestのbodyの値を使えるようにする
app.use(express.urlencoded({extended: false}))
//public配下をフロントエンドに設定
app.use(express.static(path.join(__dirname, "public")));

//ページにアクセスした時の処理
app.get('/access', function (req, res) {
    //アクセス時刻を取得
    const accessTime=new Date();
    //定数「OK」をstatusに格納
    const status="OK";

    //アクセス時刻, statusをblobストレージに登録
    blobController.registerAccessData(accessTime, status);
});

//クイズに回答した時の処理
app.post('/api/v1/quiz', function (req, res) {
        // 回答データを取得
        //現在時刻、ユーザ回答を取得
        const answerTime=new Date();
        const answer=req.body.answer;
        //回答が2ならtrue、それ以外はfalseを回答結果に格納
        let answerResult;
        if(answer==="2"){
            answerResult=true;
        }else{
            answerResult=false;
        }

        //回答時刻, ユーザ回答、回答結果をCosmosDBに登録
        dbController.registerAnswerData(answerTime, answer, answerResult);

        //publicの中の相対パス
        res.redirect("/correct.html");
});

//管理者ページの出力
app.get('/manage', function (req, res) {
    console.log("管理者ページの出力");
    res.send('<h1>管理用ページです!</h1><h3>直書きでhtmlを返却することもできます</h3>')
});

//サーバーを起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("I am running!");
});

console.log("最終行です");