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

    jsonAssemble() {
        const content = this.#document.content
            .split(evaluateRegex(/\n/))
            .filter(line => line.length)

        this.#document.content = content.map(line => {
            const lineObject = new Object()
            const lineSplitted = line.split(this.#document.delimiter)
            let documentHeader = this.#document.header
            if (!this.#document.useHeader) {
                documentHeader = Array.from({ length: lineSplitted.length }, (_, index) => index)
            }
            for (const index in documentHeader) {
                console.log(index)
                lineObject[documentHeader[index]] = lineSplitted[index]
            }
            return lineObject
        })
        return this
    }

    build() {
        return this.#document.content
    }
}

module.exports = CSVParserFluentAPI