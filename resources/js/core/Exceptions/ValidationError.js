class ValidationError extends Error {

    constructor(message, errors) {
        super(message)

        this.errors = errors || {}
        this.name = 'ValidationError'
        this.status = 422
        this.fields = Object.assign({}, Object.keys(errors))

        window.app.$notify.error(this.parseError(message, errors))
    }

    parseError(message, errors) {
        let fullMessage = ''
        for (let key in errors) {
            if (errors.hasOwnProperty(key)) fullMessage += errors[key][0] + '<br>'
        }

        return fullMessage
    }
}

export default ValidationError
