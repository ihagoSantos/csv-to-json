const {describe, it} = require('mocha')
const {expect} = require('chai')
const validMock = require('./mock/valid')
const CSVParserFluentAPI = require('./../src/csvParserFluentAPI')

describe('CSVParserFluentAPI', () => {
    it('#build', () => {
        const result = new CSVParserFluentAPI(validMock)
            .build()

        expect(result).to.be.deep.equal(validMock)
    })
})