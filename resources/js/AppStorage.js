class AppStorage {
    storeToken(token) {
        return localStorage.setItem("token", token);
    }

    storUser(user) {
        localStorage.setItem("user", user);
    }

    store(user, token) {
        this.storeToken(token);

        this.storUser(user);
    }

    clear() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    getToken() {
        return localStorage.getItem("token");
    }

    getUser() {
        return localStorage.getItem("user");
    }
}

export default (AppStorage = new AppStorage());
