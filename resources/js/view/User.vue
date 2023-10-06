<template>
  <div>
    <div v-for="user in users" :key="user.id_user" style="margin-bottom: 10px">
      <h5>{{ user.username }}</h5>
      <h6>{{ user.name }}</h6>
    </div>
  </div>
</template>

<script>
import("../../css/style.css");
import Axios from "axios";

export default {
  name: "User",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.users = [];
      Axios.get("/index").then((res) => {
        this.users = res.data;
      });
    },
  },
  mounted() {
    document.title = "Daftar User";
  },
};
</script>
