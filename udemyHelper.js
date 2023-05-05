const name="Mike"

const add=function(a,b){
    return a+b;
};

//fsのメソッド取得
//promised basedではなくcalback側の引用を選択
const fs = require('node:fs');

const read=function(){
    //sample.txtの文字読み込み→出力
    console.log("読み込み開始");
    fs.readFile("./sample.txt", "utf8", function(err, data){
        console.log(data);
    });
    console.log("読み込み完了");
}

const write=function(){
    //sample.txt作成
    console.log("書き出し開始");
    fs.writeFile("sample.txt", "Hello World!!!", function(){
        console.log("書き出し完了");
    });
}

//定数を他ファイルで使えるようにする
//複数エクスポート時は以下の形式（JSON）で
module.exports={
    namae: name,
    tashizan: add,
    yomikomi: read,
    kakikomi: write
}