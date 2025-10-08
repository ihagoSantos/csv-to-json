const { describe, it } = require('mocha')
const { expect } = require('chai')
const validMock = require('./mock/valid')
const noHeaderValidMock = require('./mock/no-header-valid')
const CSVParserFluentAPI = require('./../src/csvParserFluentAPI')

describe('CSVParserFluentAPI', () => {
    it('#build', () => {
        const result = new CSVParserFluentAPI({
            content: validMock
        })
            .build()
        expect(result).to.be.deep.equal(validMock)
    })
    it('#extractHeader', () => {
        const result = new CSVParserFluentAPI({
            content: validMock
        })
            .extractHeader()
            .build()
        expect(result).to.be.deep.equal("1,Ihago,30,ihago@teste.com\n2,Maria,20,maria@teste.com\n")
    })

    it('#extractHeader with no header', () => {
        const result = new CSVParserFluentAPI({
            content: noHeaderValidMock,
            useHeader: false
        })
            .extractHeader()
            .build()
        expect(result).to.be.deep.equal(noHeaderValidMock)
    })
    it('#jsonAssemble', () => {
        const result = new CSVParserFluentAPI({
            content: validMock
        })
            .extractHeader()
            .jsonAssemble()
            .build()
        expect(result).to.be.deep.equal([
            {
                "Id": "1",
                "Nome": "Ihago",
                "Idade": "30",
                "Email": "ihago@teste.com"
            },
            {
                "Id": "2",
                "Nome": "Maria",
                "Idade": "20",
                "Email": "maria@teste.com"
            }
        ])
    })
    it('#jsonAssemble with no header', () => {
        const result = new CSVParserFluentAPI({
            content: noHeaderValidMock,
            useHeader: false
        })
            .extractHeader()
            .jsonAssemble()
            .build()
        expect(result).to.be.deep.equal([
            {
                "0": "1",
                "1": "Ihago",
                "2": "30",
                "3": "ihago@teste.com"
            },
            {
                "0": "2",
                "1": "Maria",
                "2": "20",
                "3": "maria@teste.com"
            }
        ])
    })
})