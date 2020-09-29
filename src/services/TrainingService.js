import auth from '../auth';

export default {
    showTraining(profileId) {
        console.log('test');
        return fetch(
                `${process.env.VUE_APP_REMOTE_API}/api/training/${profileId}`,
                {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + auth.getToken(),
                },
                credentials: "same-origin",
                }
            )
    },

    getNeedsApproval() {
        return fetch(`${process.env.VUE_APP_REMOTE_API}/api/needApproval`, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + auth.getToken(),
            },
            credentials: "same-origin",
          })
    },

    searchTraining(fromDate, toDate) {
        return fetch(
            `${process.env.VUE_APP_REMOTE_API}/api/searchTraining?fromDate=${fromDate}&toDate=${toDate}`,
            {
              method: "GET",
              headers: {
                Authorization: "Bearer " + auth.getToken(),
              },
              credentials: "same-origin",
            }
          )
    },

    approveTraining(id) {
        return fetch(`${process.env.VUE_APP_REMOTE_API}/api/updateApproval/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.getToken(),
            },
          })
    },

    createTraining(profileId, training) {
        return fetch(
            `${process.env.VUE_APP_REMOTE_API}/api/addTraining/${profileId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + auth.getToken(),
              },
              body: JSON.stringify(training),
            }
          )
    },

    deleteTraining(id) {
        return fetch(`${process.env.VUE_APP_REMOTE_API}/api/deleteTraining/${id}`, {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + auth.getToken(),
            },
            credentials: "same-origin",
          })
    }
}