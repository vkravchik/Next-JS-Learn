/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        DB_LOCAL_URI: 'mongodb://localhost:27017/bookit',
        DB_URI: '',
    }
}

module.exports = nextConfig
