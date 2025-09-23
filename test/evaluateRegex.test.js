const { describe, it } = require('mocha')
const { expect } = require('chai')

const evaluateRegex = require('./../src/utils/evaluateRegex') 
const unsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/

describe('evaluateRegex', () => {
    it('#evaluateRegex should be throw an error if unsing an unsafe regex', () => {
        expect(() => {
            evaluateRegex(unsafeRegex)
        }).to.throw(InvalidRegexError, `THis ${unsafeRegex} is unsafe!`)
    })
})