const fs = require('fs');

const length = 2;
const array = [];

for (let index = 0; index < length; index++) {
    array.push({
        numeroUm: randomInt(),
        numeroDois: randomInt(),
        numeroTres: randomInt(),
        numeroQuatro: randomInt(),
        numeroCinco: randomInt(),
        numeroSeis: randomInt(),
        numeroSete: randomInt(),
        numeroOito: randomInt(),
        numeroNove: randomInt(),
        stringUm: randomString(10),
        stringDois: randomString(10),
        stringTres: randomString(10),
        stringQuatro: randomString(10),
        stringCinco: randomString(10),
        stringSeis: randomString(10),
        stringSete: randomString(10),
        stringOito: randomString(10),
        stringNove: randomString(10),
    })
}

const jsonObj = {
    items: array
};
const json = JSON.stringify(jsonObj);

fs.writeFile('data/my-large-file.json', json, 'utf8', (err, data) => {
   if (err) throw err;

   console.log('Finalizado')
});

function randomInt(){
    return Math.floor(Math.random() * 10000000000000000) + 100000000000000
}

function randomString(length, style = 'frictionless', characters = '') {
    let result              = '';
    const allCharacters     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const frictionless      = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    const provided          = characters;

    const Styles = {
        'all':          allCharacters,
        'frictionless': frictionless,
        'characters':   provided
    }

    const generate = (set) => {
        return set.charAt(Math.floor(Math.random() * set.length));
    };

    for ( let i = 0; i < length; i++ ) {
        switch(Styles[style]) {
            case Styles.all:
                result += generate(allCharacters);
                break;
            case Styles.frictionless:
                result += generate(frictionless);
                break;
            case Styles.characters:
                result += generate(provided);
                break;
        }
    }
    return result;
}