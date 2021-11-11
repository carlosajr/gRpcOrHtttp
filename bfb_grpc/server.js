const grpc = require("grpc");

var protoLoader = require('@grpc/proto-loader');
const path = require('path');

const protoObject = protoLoader.loadSync(path.resolve(__dirname, '../', 'main.proto'));
const Execution = grpc.loadPackageDefinition(protoObject);

const server = new grpc.Server();

server.addService(Execution.ExecutionService.service, {
    execute: (_, callback) => {
        const number = Math.floor(Math.random() * 10000);
        callback(null, { exectuted: true, number });
    },
})

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());

console.log('Server BFB gRPC Running at 127.0.0.1:50051');

server.start();