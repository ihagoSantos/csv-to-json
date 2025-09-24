class CSVParserFluentAPI {
    #content
    constructor(content) {
        this.#content = content
    }

    build(){
        return this.#content
    }
}

module.exports = CSVParserFluentAPI