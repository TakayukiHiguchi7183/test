const { BlobServiceClient } = require("@azure/storage-blob");

async function writeAccessLogToBlobStorage(accessTime, status) {
    //書き込み内容を作成
    const content = `${accessTime} ${status}\n`;

    // envファイルからblob情報を取得
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.BLOB_STORAGE_CONNECTION_STRING);
    const containerName = process.env.BLOB_STORAGE_CONTAINER_NAME;
    const fileName = process.env.BLOB_STORAGE_FILE_NAME;

    //blobストレージに書き込み
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    const uploadResult = await blockBlobClient.upload(content, content.length);

    //書き込み結果をコンソールに出力
    console.log(`Uploaded block blob ${fileName} successfully`, uploadResult.requestId);
}