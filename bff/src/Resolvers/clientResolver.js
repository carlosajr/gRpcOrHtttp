const ClientGRPC = require('../Clients/grpc')

function resolve(type) {
    switch (type) {
        case 'grpc':
            return new ClientGRPC();
        case 'http':
            return new ClientGRPC();
        default:
            throw new Error('unknown type')
    }
}

module.exports = { resolve }