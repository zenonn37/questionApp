import Token from "./Token";
import AppStorage from "./AppStorage";

class User {
    signup(datas) {
        axios
            .post("/api/auth/signup", datas)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }
    login(data) {
        axios
            .post("/api/auth/login", data)
            .then(res => {
                //res => console.log(res.data)
                this.responseAfterLogin(res);
            })

            .catch(error => {
                console.log(error.response.data);
            });
    }

    responseAfterLogin(res) {
        console.log(res);

        const access_token = res.data.access_token;
        const username = res.data.user;
        console.log(username);

        if (Token.isValid(access_token)) {
            AppStorage.store(username, access_token);
            window.location = "/forum";
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();

        if (storedToken) {
            return Token.isValid(storedToken) ? true : false;
        }
        return false;
        console.log(storedToken);
    }

    loggedIn() {
        return this.hasToken();
    }

    logOut() {
        AppStorage.clear();
        window.location = "/forum";
    }

    name() {
        if (this.loggedIn()) {
            return AppStorage.getUser();
        }
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }
}

export default (User = new User());
