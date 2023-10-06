import { createRouter, createWebHistory } from "vue-router";

import User from "../view/User.vue";
import Home from "../view/Home.vue";
import Warehouse from "../view/Warehouse.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/user",
        name: "User",
        component: User,
    },
    {
        path: "/warehouse",
        name: "Warehouse",
        component: Warehouse,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
