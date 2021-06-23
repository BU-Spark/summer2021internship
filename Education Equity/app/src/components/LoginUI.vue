<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" v-if="user">
        <div id="firebaseui-auth-container"></div>
      </v-col>
      <div v-else id="firebaseui-auth-container"></div>
    </v-row>
  </v-container>
</template>

<script>
import { authUI, authUIConfig } from "../firebase/init";
export default {
  name: "LoginUI",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    if (!this.user) {
      authUI.start("#firebaseui-auth-container", authUIConfig);
    }
  },
};
</script>
