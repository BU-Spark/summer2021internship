<template>
  <v-app>
    <navigationBar />
    <router-view />
  </v-app>
</template>

<script>
import navigationBar from "@/components/Navigation.vue";
import store from "@/store/index.js";
export default {
  name: "App",
  store,
  components: {
    navigationBar,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
