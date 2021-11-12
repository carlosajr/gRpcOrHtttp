const ClientGRPC = require('../Clients/grpc')
const ClientHTTP = require('../Clients/http')

function resolve(type) {
    switch (type) {
        case 'grpc':
            return new ClientGRPC();
        case 'http':
            return new ClientHTTP();
        default:
            throw new Error('unknown type')
    }
}

module.exports = { resolve }