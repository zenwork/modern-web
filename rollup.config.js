import { libConfig } from './config/rollup/lib-config'

// returns a rollup configuration that can be customized if neccessary
const config = libConfig(process.env.BUILD === 'production')

export default config
