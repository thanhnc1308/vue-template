const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const TokenService = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },
    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY);
    },
    saveToken() {

    },
    saveRefreshToken() {

    },
    deleteToken() {

    },
    deleteRefreshToken() {

    }
}

export {TokenService}