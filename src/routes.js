import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/authentication/Login.vue'
import Home from './components/Home.vue'
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login,
            meta: {
                forVisitors: true
            }
        },
        {
          path: '/home',
            component: Home,
            meta: {
              forAuth: true
            }
        }
    ]
});
export default router