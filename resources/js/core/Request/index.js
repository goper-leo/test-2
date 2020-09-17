import axios from 'axios'
import ValidationError from '@core/Exceptions/ValidationError'
import ModelNotFoundError from '@core/Exceptions/ModelNotFoundError'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json'

axios.interceptors.response.use(((response) => {
    return response;
}), ((error) => {

    if (!error.status) {
        if (error.hasOwnProperty('response')) {
            if (error.response == undefined) {
                // Network error - no internet connection
                window.app.$notify.error(`Please check your internet connection.`)
                return Promise.reject(error)
            }

            const { response } = error
            const { message, errors } = response.data

            switch (response.status) {
                case 422:
                    throw new ValidationError(message, errors)
                case 404:
                    throw new ModelNotFoundError(message, errors)
                case 406:
                    window.app.$notify.error(message)
            }

            return Promise.reject(response);
        }

    }


}));
