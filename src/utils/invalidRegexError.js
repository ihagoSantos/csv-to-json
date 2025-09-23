class InvalidRegexError extends Error {
    constructor(exp){
        super(`The ${exp} is unsafe!`)
        this.name = InvalidRegexError.name
    }
}