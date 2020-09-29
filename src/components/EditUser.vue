<template>
  <div class="permission-form">
    <button v-on:click="deleteUser()" class="delete-button">Delete User</button>
    <div v-if="!toggleDate">
      <button v-on:click="dateForm()" class="make-inactive">Make Inactive</button>
    </div>
    <div v-if="toggleDate">
      <span class="label">End Date</span>
      <input type="date" v-model="endDate" />
    </div>
    <div v-if="toggleDate">
      <button v-on:click="makeInactive()" class="deactivate">Deactivate</button>
    </div>
    <label for="select" class="drop-label">User Role</label>
    <select v-model="user.permission" class="short-input" >
      <option value="user" v-if="this.$props.currentpermission != 'user'">User</option>
      <option value="admin" v-if="this.$props.currentpermission != 'admin'">Admin</option>
    </select>
    <button v-on:click="changeUserpermission" type="submit" class="submit">Submit</button>
  </div>
</template>

<script>
import profileService from '../services/ProfileService';

export default {
  props: {
    id: Number,
    email: String,
    currentpermission: String,
  },
  data() {
    return {
      toggleDate: false,
      endDate: "",
      user: {
        email: this.$props.email,
        permission: this.$props.currentpermission,
        id: this.$props.id,
      },
    };
  },
  methods: {
    dateForm() {
      if (!this.toggleDate) {
        this.toggleDate = true;
      } else {
        this.toggleDate = false;
      }
    },
    makeInactive() {
      profileService.makeInactive(this.id, this.endDate)
        .then((response) => {
          if (response.ok) {
            this.$router.push({ name: "allProfiles" });
            this.$router.go();
          }
        })
        .catch((err) => console.error(err));
    },
    deleteUser() {
      profileService.deleteUser(this.id)
        .then((response) => {
          if (response.ok) {
            this.$router.push({ name: "allProfiles" });
            this.$router.go();
          }
        })
        .catch((err) => console.error(err));
    },
    changeUserpermission() {
      profileService.changeUserPermission(this.user)
        .then((response) => {
          if (response.ok) {
            this.$router.push({ name: "allProfiles" });
            this.$router.go();
          }
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>
<style scoped >
.delete-button {
  float: left;
  width: 125px;
  height: 28px;
  background-color: rgba(36, 104, 143, 1);
  color: white;
  padding: 5px 20px;
  text-decoration: none;
  font-size: 12px;
  border-radius: 4px;
  border: none;
  margin: 5px;
  cursor: pointer;
}
.submit {
  float: left;
  font-size: 10px;
  width: 125px;
  height: 28px;
  background-color: rgba(36, 104, 143, 1);
  color: white;
  padding: 5px 20px;
  text-decoration: none;
  font-size: 12px;
  border-radius: 4px;
  border: none;
  margin: 5px;
  cursor: pointer;
}
.make-inactive {
  float: left;
  font-size: 10px;
  width: 125px;
  height: 28px;
  background-color: rgba(36, 104, 143, 1);
  color: white;
  padding: 5px 20px;
  text-decoration: none;
  font-size: 12px;
  border-radius: 4px;
  border: none;
  margin: 5px;
  cursor: pointer;
}
.deactivate {
  float: left;
  font-size: 10px;
  width: 125px;
  height: 28px;
  background-color: rgba(36, 104, 143, 1);
  color: white;
  padding: 5px 20px;
  text-decoration: none;
  font-size: 12px;
  border-radius: 4px;
  border: none;
  margin: 5px 5px 10px 5px;
  cursor: pointer;
}
input {
  width: 125px;
  height: 28px;
  border: none;
  border-radius: 4px;
  margin: 10px 5px 2px 5px;
}
.short-input{
  padding: 5px;
  margin: 0px 5px 5px 5px;
  width: 125px;
  float: left;
  border: none;
  border-radius: 2px;
}
.dropdown {
  padding: 5px;
  margin: 10px;
  border: none;
  border-radius: 2px;
}
.drop-label{
  color:rgba(32, 33, 36, 1);
  font-size: 12px;
}
</style>