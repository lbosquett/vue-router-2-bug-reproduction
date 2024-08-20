import VueRouter from "vue-router";
import blockStore from "./stores/block-store.js";

const router = new VueRouter({
    mode: "history",
    routes: [
        { name: "page-1", path: '/', component: () => import("./pages/Page1.vue") },
        { name: "page-2", path: '/page-2', component: () => import("./pages/Page2.vue") },
        { name: "page-3", path: '/page-3', component: () => import("./pages/Page3.vue") }
    ]
});

router.beforeEach((to, from, next) => {
    if (blockStore.block) {
        if (!confirm("leave?")) {
            next(false);
            return;
        }
    }
    next();
});

export default router;