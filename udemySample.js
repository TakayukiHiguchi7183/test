//処理の書き方
console.log("1コンソール出力")

//関数使い方
function test(){
    console.log("2関数でのコンソール出力")
}
test();

//定数を他ファイルから持ってくる
//「./」で同じ階層を指定
const name=require("./udemyHelper");

console.log(name)

//非同期処理
setTimeout(function(){
    console.log("3タイマー関数での出力")
}, 5000)

setTimeout(function(){
    console.log("3タイマー関数での出力2個目")
}, 5000)

setTimeout(function(){
    console.log("3タイマー関数での出力3個目")
    console.log("5秒待ちは後ろの非同期処理→関数呼び出し自体はほぼ同時")
}, 5000)