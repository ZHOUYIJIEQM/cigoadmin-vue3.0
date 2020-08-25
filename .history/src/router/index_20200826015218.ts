import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "",
		component: Home,<template>
<div id="app" class="home-page">
    <left-menu class="home-left-menu"></left-menu>
    <div class="home-right">
        <top-bar class="home-top-bar"></top-bar>
        <main-content class="home-main-content" />
    </div>
    <right-panel class="home-right-panel"></right-panel>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";

import LeftMenu from "./components/frame/LeftMenu.vue";
import TopBar from "./components/frame/TopBar.vue";
import MainContent from "./components/frame/MainContent.vue";
import RightPanel from "./components/frame/RightPanel.vue";

export default defineComponent({
    name: "App",
    components: {
        LeftMenu,
        TopBar,
        MainContent,
        RightPanel,
    },
});
</script>

<style lang="scss">
.home-page {
    display: flex;
    flex-direction: row;

    .home-right {
        display: flex;
        background-color: #fff;
        flex: 1;
        flex-direction: column;
    }
}
</style>

	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
