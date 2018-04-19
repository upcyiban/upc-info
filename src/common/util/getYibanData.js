import HttpRequest from "./HttpRequest"

class YibanAuth {

}

class UserData {

    static isAuth() {
        let token = window.sessionStorage.token;
        return token !== null && token !== '' && token !== undefined;
    }

    static getToken() {
        return new HttpRequest().getTextData('/token').then(token => {
            window.sessionStorage.token = token
            console.log(token);
            return token;
        })
    }

    static getLocalToken() {
        return window.sessionStorage.token
    }

    static haveLocalUserData() {
        /** @namespace window.localStorage.userData */
        let yibanUser = window.localStorage.userData
        return yibanUser !== null && yibanUser !== undefined && yibanUser !== ''
    }
    static getLocalUserData() {
        return JSON.parse(window.localStorage.userData)
    }
}

export {UserData , YibanAuth}
