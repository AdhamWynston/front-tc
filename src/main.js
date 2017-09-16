import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Router from './routes'

import Auth from './packages/auth/Auth'

Vue.use(VueResource);
Vue.use(Auth);
Router.beforeEach(
    (to, from, next) => {
        if(to.matched.some(record => record.meta.forVisitors)){
            if(Vue.auth.isAuthenticated()){
                next({
                path: '/home'
                })
            } else next()
        }
        else if(to.matched.some(record => record.meta.forAuth)){
            if(! Vue.auth.isAuthenticated()){
                next({
                    path: '/login'
                })
            } else next()
        }

        else next()

    }
)
new Vue({
    el: '#app',
    render: h => h(App),
    router: Router
})

