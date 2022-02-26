const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-redeclare
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}

module.exports = nextConfig
