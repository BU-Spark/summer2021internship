<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Digital Equity</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="home()">Home</v-btn>
        <v-btn v-if="user" text @click="admin()">Administrator</v-btn>
        <v-btn icon
          ><v-icon v-if="user" text @click="signOut()">mdi-logout</v-icon>
          <v-icon v-else text @click="signIn()">mdi-login</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async signOut() {
      await this.$store.dispatch("logOut");
      this.$router.push("/");
    },
    home() {
      this.$router.push("/");
    },
    admin() {
      this.$router.push("/admin");
    },
    signIn() {
      this.$router.push("/login");
    },
  },
};
</script>
