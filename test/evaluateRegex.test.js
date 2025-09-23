const { describe, it } = require('mocha')
const { expect } = require('chai')
const InvalidRegexError = require('./../src/utils/invalidRegexError')
const evaluateRegex = require('./../src/utils/evaluateRegex') 


describe('evaluateRegex', () => {
    it('#evaluateRegex should be throw an error if unsing an unsafe regex', () => {
        const unsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/
        expect(() => {
            evaluateRegex(unsafeRegex)
        }).to.throw(InvalidRegexError, `The ${unsafeRegex} is unsafe!`)
    })

    it('#evaluateRegex should not throw an error using a valid regex', () => {
        const safeRegex = /^([a-z])$/
        expect(() => {
            evaluateRegex(safeRegex)
        }).to.not.throw
        expect(evaluateRegex(safeRegex)).to.be.deep.equal(safeRegex)
    })
})