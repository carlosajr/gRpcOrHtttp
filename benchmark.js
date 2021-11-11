const axios = require('axios').default;

const client = axios.create({ baseURL: 'http://127.0.0.1:3333' });

(async ()=>{
    // Protocolo HTTP
    let startDate = new Date();
            
    await client.get('/bff?type=http');

    let time = new Date().getTime() - startDate.getTime();
    console.log(`HTTP - TEMPO TOTAL: ${time}`);

    // Protocolo GRPC
    startDate = new Date();
            
    await client.get('/bff?type=grpc');

    time = new Date().getTime() - startDate.getTime();
    console.log(`GRPC - TEMPO TOTAL: ${time}`);
})();



