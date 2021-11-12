const fs = require('fs');
const path = require('path');

function execute() {
    const json = fs.readFileSync(path.resolve(__dirname, '../', 'data', 'my-large-file.json'), 'utf8')
    return JSON.parse(json);
}

module.exports = { execute }