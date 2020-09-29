import auth from '../auth';

export default {
    getProfile() {
        return fetch(`${process.env.VUE_APP_REMOTE_API}/api/profile`, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + auth.getToken(),
            },
            credentials: "same-origin",
          })
    },

    getUser(profileId) {
      return fetch(
        `${process.env.VUE_APP_REMOTE_API}/api/user/${profileId}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + auth.getToken(),
          },
          credentials: "same-origin",
        }
      )
    },

    getAllProfiles() {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/allProfiles`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + auth.getToken(),
        },
        credentials: "same-origin",
      })
    },

    getAllUsers() {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/users`,
        {
        method: 'GET',
        headers: {
        Authorization: 'Bearer ' + auth.getToken(),
        },
        credentials: 'same-origin',
        })
    },

    getCertcp(campusShortCode) {
        return fetch(
            `${process.env.VUE_APP_REMOTE_API}/api/certperiod/${campusShortCode}`,
            {
              method: "GET",
              headers: {
                Authorization: "Bearer " + auth.getToken(),
              },
              credentials: "same-origin",
            }
          )
    },

    createProfile(profile) {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/createProfile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.getToken(),     
        },
        body: JSON.stringify(profile)    
        })
    },

    updatePassword(user) {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/updatePassword`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.getToken(),     
        },
        body: JSON.stringify(user)    
        })
    },

    makeInactive(id, endDate) {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/deactivateUser/${id}`, {
        method: "Put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.getToken(),
        },
        body: JSON.stringify(endDate),
      })
    },

    deleteUser(id) {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/deleteUser/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + auth.getToken(),
        },
        credentials: "same-origin",
      })
    },

    changeUserPermission(user) {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/changeUserPermission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.getToken(),
        },
        body: JSON.stringify(user),
      })
    }
}