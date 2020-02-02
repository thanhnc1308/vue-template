import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// import divided router file
import RouterOne from '@/router/RouterOne'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/test',
            component: () => import('./components/TestRouter.vue'),
            meta: {
                rule: 'admin'
            }
        },
        ...RouterOne.SomeRouter,
        // full pages
        {
            path: '/pages/login',
            component: () => import('./components/TestRouter.vue'),
            meta: {
                rule: 'admin'
            }
        },
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ]
})

// check authentication
router.beforeEach((to, from, next) => {
    if (to.path === '/pages/login') {
        return next();
    } else {
        //check auth
    }
})

// remove loading
router.afterEach(() => {
    const appLoading = '';
    // display none #app-loading
})