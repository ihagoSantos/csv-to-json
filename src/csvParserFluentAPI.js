'use strict';
const evaluateRegex = require('./utils/evaluateRegex')
class CSVParserFluentAPI {
    #document
    constructor({
        content,
        delimiter = ',',
        useHeader = true
    }) {
        this.#document = {
            content,
            delimiter,
            useHeader,
            header: []
        }
    }

    extractHeader() {
        if (!this.#document.useHeader) return this

        const extractHeaderRegex = evaluateRegex(/^.*\s/)
        let [header] = this.#document.content.match(extractHeaderRegex)

        this.#document.header = header
            .replace(evaluateRegex(/\n/), '')
            .split(this.#document.delimiter)

        this.#document.content = this.#document.content.replace(extractHeaderRegex, '')
        return this
    }

    build() {
        return this.#document
    }
}

module.exports = CSVParserFluentAPI