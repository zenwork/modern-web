import { esbuildPlugin }    from '@web/dev-server-esbuild'
import resolve              from '@rollup/plugin-node-resolve'
import { importMapsPlugin } from '@web/dev-server-import-maps'
import styles               from 'rollup-plugin-styles'
import { fromRollup }       from '@web/dev-server-rollup'
import cssLit           from 'rollup-plugin-lit-css'
import { generator }        from './extensions/generator.mjs'
import { resolver }         from './extensions/resolver.mjs'

const cssLitPlugin = fromRollup(cssLit)
const stylesPlugin = fromRollup(styles)

export default {
  preserveSymlinks: true,
  rootDir: './',
  mimeTypes: {
    '**/*.svg': 'svg',
    '**/*.css': 'js'
  },
  plugins: [
    cssLitPlugin({ include: ['src/**/*.css'] }),
    stylesPlugin({include:['assets/**/*.css']}),
    esbuildPlugin({ ts: true }),
    resolve(),
    importMapsPlugin(),
    resolver,
    generator
  ]
}
