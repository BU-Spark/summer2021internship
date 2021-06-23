import Vue from "vue";
import Vuex from "vuex";
import { db, auth } from "@/firebase/init.js";

Vue.use(Vuex);

const state = {
  user: null,
};

const mutations = {
  setUser: (st, payload) => {
    st.user = payload;
  },
};

const actions = {
  getUser: async (context) => {
    const user = auth.currentUser;
    // user is just not logged in
    if (!user) {
      return;
    }
    const mydb = db.collection("users").doc(user.uid);
    var raid = await mydb.get();
    if (!raid.exists) {
      // first time user
      await mydb.set({
        displayName: user.displayName,
        uid: user.uid,
      });
      raid = await mydb.get();
      context.commit("setUser", raid.data());
    } else {
      // returning user
      context.commit("setUser", raid.data());
    }
  },
  logOut: async (context) => {
    await auth.signOut();
    context.commit("setUser", null);
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;
