<template>
  <div>
    <router-link :to="{ name: 'User' }">User</router-link>
    <router-link :to="{ name: 'Warehouse' }">Warehouse</router-link>
  </div>
</template>

<script>
import("../../css/style.css");

export default {
  name: "Home",
};
</script>
