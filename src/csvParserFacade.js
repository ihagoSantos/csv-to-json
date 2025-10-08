const CsvParserFluentApi = require('./csvParserFluentAPI')
class CsvParserFacade {
    #csvParserFluentApi
    constructor({ content, delimiter, useHeader }) {
        this.#csvParserFluentApi = new CsvParserFluentApi({ content, delimiter, useHeader })
    }

    csvToJson() {
        return this.#csvParserFluentApi
            .extractHeader()
            .jsonAssemble()
            .build()
    }
}
module.exports = CsvParserFacade