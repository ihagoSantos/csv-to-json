'use strict';
const { readFile } = require('fs/promises');
const { join } = require('path');

(async () => {
    const dataBuffer = (await readFile(join(__dirname, './../document.csv'))).toString()
    console.log(dataBuffer)
})();