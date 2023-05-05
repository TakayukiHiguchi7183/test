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

const readJson=function(){
    //sample.jsonの文字読み込み→JSONとして読み込み→中身を出力
    console.log("JSON読み込み開始");
    fs.readFile("./sample.json", "utf8", function(err, data){
        //StringをJSONに復元
        const person=JSON.parse(data);
        console.log(person.name);
    });
    console.log("読み込み完了");
}

const writeJson=function(){
    //sample.json作成
    console.log("JSON作成開始");
    const person={
        name: "Mike",
        age: 30
    }
    fs.writeFile("sample.json", JSON.stringify(person), function(){
        console.log("作成完了");
    });
}

//定数を他ファイルで使えるようにする
//複数エクスポート時は以下の形式（JSON）で
module.exports={
    namae: name,
    tashizan: add,
    read: read,
    write: write,
    readJson: readJson,
    writeJson: writeJson
}