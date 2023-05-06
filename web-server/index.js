const express = require('express')
const app = express()

//イベントドリブン（引数が来る→中の処理出し分け）
app.get('/', function (req, res) {
    console.log("Topページの出力");
    //console.log(req);
    res.send('Topページです')
})

app.get('/About', function (req, res) {
    console.log("Aboutページの出力");
    res.send('<h1>Aboutページです!</h1><h2>htmlを返却することもできます</h2>')
})

app.get('/api/v1/users', function (req, res) {
    console.log("APIでユーザ情報取得");
    res.send({
        name: "Mike",
        age: 30
    })
})

app.listen(3000, function(){
    console.log("I am running!");
});

console.log("最終行です");