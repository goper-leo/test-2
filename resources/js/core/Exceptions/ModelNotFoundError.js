import { trim, kebabCase, upperFirst } from 'lodash'
import { substrInBetween } from '@utils/string'

class ModelNotFoundError extends Error {

    constructor(message, errors) {
        super(message)

        this.name = 'ModelNotFoundError'
        let errorMessage = this.parseError(message)
        this.message = errorMessage
        window.app.$notify.error(errorMessage)
    }

    parseError(message) {
        let start = `No query results for model [App\\Models\\`
        let end = `]`
        let model = substrInBetween(message, start, end)
        model = upperFirst(kebabCase(model).replace(/-/g, ' '))
        return `${model} not found.`
    }

}

export default ModelNotFoundError
