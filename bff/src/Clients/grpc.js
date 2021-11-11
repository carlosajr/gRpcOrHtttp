var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
const path = require('path');

const protoObject = protoLoader.loadSync(path.resolve(__dirname, '../', '../', '../', 'main.proto'));
const ExecutionClient = grpc.loadPackageDefinition(protoObject);

class Client {
    constructor() {
        this.client = new ExecutionClient.ExecutionService('127.0.0.1:50051', grpc.credentials.createInsecure());
    }

    execute() {
        return new Promise((resolve, reject) => {
            const startDate = new Date();

            this.client.execute({}, (err, result) => {
                if (err) reject(err) 
      
                const time = new Date().getTime() - startDate.getTime();
                
                resolve({result, time});
              })
        })
    }
}

module.exports = Client;