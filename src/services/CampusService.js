import auth from '../auth';

export default {
    submitDate(campusShortCode, campus) {
        return fetch(`${process.env.VUE_APP_REMOTE_API}/api/period/${campusShortCode}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.getToken(),     
            },
            body: JSON.stringify(campus)    
            })
    }
}