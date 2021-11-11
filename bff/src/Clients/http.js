const axios = require('axios').default;

class Client {
    constructor() {
        this.client = axios.create({ baseURL: 'https://http://127.0.0.1:3434' });
    }

    async execute() {
        const startDate = new Date();
        
        const result = await this.client.get('/bfb');
        
        const time = new Date().getTime() - startDate.getTime();

        return { result, time };
    }
}

module.exports = Client;