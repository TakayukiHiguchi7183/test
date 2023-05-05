const name="Mike"
const add=function(a,b){
    return a+b;
};


//定数を他ファイルで使えるようにする
//複数エクスポート時はJSON形式で
module.exports={
    namae: name,
    tashizan: add
}