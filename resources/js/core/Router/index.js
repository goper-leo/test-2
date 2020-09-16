import Vue from 'vue'
import VueRouter from 'vue-router'

//** Routes
import admin from "./routes/admin"
import auth from "./routes/auth"
import user from "./routes/user"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        ...admin,
        ...auth,
        ...user,
        { path: "*", component: require('@pages/error/404').default }
    ],
});

router.beforeEach((to, from, next) => {
    const loggedInUser = localStorage.getItem('user')

    // Check if user is `loggedInUser`
    if (to.matched.some(record => record.meta.auth) && !loggedInUser) {
        next('/login')
        return
    }

    // Check if it's going to login route and user is already logged in
    if (to.name == 'login' && loggedInUser) {
        next('/user')
        return
    }


    if (to.matched.some(record => record.meta.auth) && loggedInUser) {
        const auth = JSON.parse(loggedInUser)
        const { is_admin } = auth.user

        // Check if this route accessing requires `ADMIN` auth
        if (to.matched.some(record => record.meta.isAdmin)) {
            // Check this `user` is an admin
            if (!is_admin) // Admin role
                next('/user')

            next() // Proceed
        }
    }


    next()
})

export default router
