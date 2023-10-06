<template>
  <div>
    <div
      v-for="warehouse in warehouses"
      :key="warehouse.id_warehouse"
      style="margin-bottom: 10px"
    >
      <h5>{{ warehouse.warehouse_code }}</h5>
      <h6>{{ warehouse.warehouse_name }}</h6>
    </div>
  </div>
</template>

<script>
import("../../css/style.css");
import Axios from "axios";

export default {
  name: "Warehouse",
  data() {
    return {
      warehouses: [],
    };
  },
  created() {
    this.getWarehouses();
  },
  methods: {
    getWarehouses() {
      this.warehouses = [];
      Axios.get("/warehouse").then((res) => {
        this.warehouses = res.data;
      });
    },
  },
  mounted() {
    document.title = "Daftar Warehouse";
  },
};
</script>
