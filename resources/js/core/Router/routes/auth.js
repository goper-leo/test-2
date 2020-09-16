/**
 * Auth routes like `login`, `reset password` etc...
 * @type {Array}
 */
const auth = [
    {
        path: '/login',
        name: 'login',
        component: require('@pages/auth/Login').default
    },
    {
        path: '/sign-up',
        name: 'sign_up',
        component: require('@pages/auth/SignUp').default
    },
]

export default auth
