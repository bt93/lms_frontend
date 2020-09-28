<template>
    <div id="editUsersPage" class="permission-page">
        <h1 class="permission-header">Edit User</h1>
        <ul class="permission-group">
            <li v-for="user in users" v-bind:key="user.id" class="permission-item">
               <!--  <User :email = user.email :currentpermission = user.permission :id = user.id /> -->
            </li>
        </ul>
    </div>
</template>

<script>
import profileService from '../services/ProfileService'

export default {
   /*  components: {
        User
    }, */
    data() {
        return {
            users: []
        }
    },

    created() {
      profileService.getAllUsers()
        .then ((response) => {     
            return response.json()
            })  
        .then ((theData) => {   
        this.users = theData;
        })
        .catch((err) => {
        console.log(err);
        })
    }
}
</script>

