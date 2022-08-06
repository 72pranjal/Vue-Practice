import { createWebHistory,createRouter } from "vue-router";
import home from './components/home.vue';

const routs=[
    {
        name:'home',
        path:'/',
        component:home,
    },
]

const router=createRouter({
    history:createWebHistory(),
    routs
});
export default router;