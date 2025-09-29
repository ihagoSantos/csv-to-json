const { describe, it } = require('mocha')
const { expect } = require('chai')
const validMock = require('./mock/valid')
const CSVParserFluentAPI = require('./../src/csvParserFluentAPI')

describe('CSVParserFluentAPI', () => {
    it('#build', () => {
        const result = new CSVParserFluentAPI({
            content: validMock
        })
            .build()
        expect(result).to.be.deep.equal({
            content: validMock,
            delimiter: ',',
            useHeader: true,
            header: []
        })
    })
    it('#extractHeader', () => {
        const result = new CSVParserFluentAPI({
            content: validMock
        })
            .extractHeader()
            .build()
        expect(result).to.be.deep.equal({
            content: "1,Ihago,30,ihago@teste.com\n2,Maria,20,maria@teste.com\n",
            delimiter: ',',
            useHeader: true,
            header: ['Id', 'Nome', 'Idade', 'Email']
        })
    })
})