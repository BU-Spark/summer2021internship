<template>
  <div class="splash">
    <div v-if="user">
      <router-link :to="{ path: profilelink() }">
        <i class="material-icons md-48">account_circle</i>
      </router-link>
    </div>
    <div v-else id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from "firebase";
import firebaseui from "firebaseui";
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      unameCheck: null,
    };
  },
  methods: {
    profilelink: function () {
      return "/profile/" + this.user.uname;
    },
  },
  async mounted() {
    if (!this.user) {
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start("#firebaseui-auth-container", {
        signInSuccessUrl: "/",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
      });
    }
    if (this.user.uname == undefined) {
      this.$router.push({ name: "editprofile" });
    } else {
      return;
    }
  },
};
</script>

<style>
.splash {
  text-align: center;
}
.material-icons.md-18 {
  font-size: 18px;
}
.material-icons.md-24 {
  font-size: 24px;
}
.material-icons.md-36 {
  font-size: 36px;
}
.material-icons.md-48 {
  font-size: 48px;
}

.spinner-wrapper {
  margin-left: 49%;
}
</style>
