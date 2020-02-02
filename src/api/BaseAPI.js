import axios from 'axios'

export default class BaseAPI {
    constructor() {
        axios.defaults.headers.common["Authorization"] = ''
    }

    baseUrl = ''
    apiPath = ''

    getAPIUrl(options) {
        if (options)
            return this.baseUrl + options;
        return this.baseUrl + this.apiPath;
    }

    // GET
    getList(options) {
        return new Promise( (resolve, reject) => {
            axios.get(this.getAPIUrl(options) + '/100')
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    getById(options) {

    }

    // POST

    // PUT

    // DELETE
}