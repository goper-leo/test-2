/**
 * Add user routes here with the page default
 * @type {Array}
 */
const admin = [
    {
        path: '/user',
        name: 'user',
        meta: {
            auth: true,
        },
        component: require('@pages/user/Dashboard').default
    }
]

export default admin
