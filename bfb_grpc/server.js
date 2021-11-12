const grpc = require("grpc");
const path = require('path');
const protoLoader = require('@grpc/proto-loader');

const protoObject = protoLoader.loadSync(path.resolve(__dirname, '../', 'main.proto'));
const Execution = grpc.loadPackageDefinition(protoObject);

const executeService = require('../service/executeService');

const server = new grpc.Server();

server.addService(Execution.ExecutionService.service, {
    execute: (_, callback) => {
        const data = executeService.execute();

        callback(null, data);
    },
})

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());

console.log('Server BFB gRPC Running at 127.0.0.1:50051');

server.start();