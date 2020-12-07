import image          from '@rollup/plugin-image'
import { fromRollup } from '@web/dev-server-rollup'
import baseConfig     from './_base.mjs'

const imagePlugin = fromRollup(image)

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    imagePlugin()

  ]
}
