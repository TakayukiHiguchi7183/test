//ファイル、引数、JSONの読み書き
const {read, write, writeJson, readJson}=require("./udemyHelper");

//コマンドからの引数取得（read or write）
console.log(process.argv[2]);
const request=process.argv[2];

if(request==="read"){
    read();
}else if(request==="write"){
    write();
}else if(request==="writeJson"){
    writeJson();
}else if(request==="readJson"){
    readJson();
}else{
    //エラーの出力
    console.error("エラー：適切な引数を入力してください");
}