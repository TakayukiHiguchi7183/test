//server/daController.js
const cosmos = require("@azure/cosmos");

//DB接続し、接続先containerを返す関数
async function connectCosmosDB() {
    require('dotenv').config();
    //configから接続情報を取得
    const config = require("../config");
    const endpoint = process.env.COSMOSDB_ENDPOINT;
    const masterKey = process.env.COSMOSDB_PRIMARY_KEY;
    //cinfigからDB名とコンテナ名を取得
    const CosmosClient = cosmos.CosmosClient;
    const client = new CosmosClient({ endpoint, auth: { masterKey } });
    const databaseId = process.env.COSMOSDB_DATABASE_ID;
    const containerId = process.env.COSMOSDB_CONTAINER_ID;
    const database = client.database(databaseId);
    const container = database.container(containerId);

    //CosmosDBに接続
    try {
        await client.open();
        console.log("接続完了");
    } catch (err) {
        console.log(err);
    }

    // container を返す
    return container;
}

//CosmosDBに回答データを登録する関数
async function registerAnswerData(answerTime, answer, answerResult) {
    //DBに接続し、接続先の情報を取得
    const container = await connectCosmosDB();

    //引数から登録するデータを作成
    const item = {
        answerTime: answerTime,
        answer: answer,
        answerResult: answerResult
    };

    //データを登録
    try {
        await container.items.create(item, options);
        console.log("登録完了");
    } catch (err) {
        console.log(err);
    }
}

//このファイルをモジュールとして扱うための記述
module.exports = {
    registerAnswerData: registerAnswerData
};