class Session {
    constructor() {
        this.enviroment = process.env.NODE_ENV;
    }

    rootUrl = window.location.href; // url basic
    useId = null;
    enviroment = '';
}

export default new Session();