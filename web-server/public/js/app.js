console.log("test");

//最初に実行される関数
function init(){
    //Ajaxでサーバ呼び出し
    const request = new XMLHttpRequest();
    request.open("GET", "/access");
    request.send();
}