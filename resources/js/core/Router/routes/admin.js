/**
 * Add admin routes here with the page default
 * @type {Array}
 */
const admin = [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        meta: {
            auth: true,
            isAdmin: true
        },
        component: require('@pages/admin/Dashboard').default
    }
]

export default admin
