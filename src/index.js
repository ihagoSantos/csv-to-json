'use strict';
const { readFile } = require('fs/promises');
const { join } = require('path');
const Parser = require('./csvParserFacade');
; (async () => {
    const dataBuffer = (await readFile(join(__dirname, './../document.csv'))).toString()
    const csvParser = new Parser({
        content: dataBuffer
    })
    console.log(csvParser.csvToJson())
})();