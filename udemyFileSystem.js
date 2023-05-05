const {yomikomi, kakikomi}=require("./udemyHelper");

//コマンドからの引数取得（read or write）
console.log(process.argv[2]);
const request=process.argv[2];

if(request==="read"){
    yomikomi();
}else if(request==="write"){
    kakikomi();
}else{
    //エラーの出力
    console.error("エラー：readかwriteを入力してください");
}