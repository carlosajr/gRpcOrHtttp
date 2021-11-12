const axios = require('axios').default;

const client = axios.create({ baseURL: 'http://127.0.0.1:3333' });

(async ()=>{
    // Protocolo GRPC
    const startDateGrpc = new Date();
                
    const resultGrpc = await client.get('/bff?type=grpc');

    const timeGrpc = new Date().getTime() - startDateGrpc.getTime();
    console.log(`GRPC - TOTAL TIME: ${timeGrpc} | PARTIAL TIME: ${resultGrpc.data.time} | ELEMENTS: ${resultGrpc.data.result.items.length}`);    
    
    // Protocolo HTTP
    const startDate = new Date();
            
    const result = await client.get('/bff?type=http');

    const time = new Date().getTime() - startDate.getTime();

    console.log(`HTTP - TOTAL TIME: ${time} | PARTIAL TIME: ${result.data.time} | ELEMENTS: ${result.data.data.items.length}`);
})();



