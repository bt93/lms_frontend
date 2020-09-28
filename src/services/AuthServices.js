export default {
    login(user) {
        return fetch(`${process.env.VUE_APP_REMOTE_API}/login`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
    },

    register(user) {
        return fetch(`${process.env.VUE_APP_REMOTE_API}/register`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
    }
}