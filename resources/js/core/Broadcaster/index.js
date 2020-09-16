import Echo from "laravel-echo"
window.Pusher = require('pusher-js')

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    wsHost: window.location.hostname,
    wsPort: process.env.NODE_ENV == 'development' ? 6001 : 6002,
    wssPort: process.env.NODE_ENV == 'development' ? 6001 : 6002,
    disableStats: true,
    encrypted: process.env.NODE_ENV == 'development' ? false : true,
    enabledTransports: ['ws', 'wss'],
})
