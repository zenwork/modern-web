import html            from '@open-wc/rollup-plugin-html'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript      from '@rollup/plugin-typescript'
import sourcemaps      from 'rollup-plugin-sourcemaps'
import styles          from 'rollup-plugin-styles'
import cssLit          from 'rollup-plugin-lit-css'
import visualizer      from 'rollup-plugin-visualizer'

export const libConfig = (isProd) => {
  return {
    // for prod we must rely on ts transpiled with tsc.
    // see: https://github.com/rollup/rollup-plugin-typescript#issues
    input: './assets/index.html',
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
      entryFileNames: '[name].js',
      chunkFileNames: '[name]-chunk.js' },
    plugins: [
      typescript(),
      nodeResolve(),
      cssLit({ include: ['src/**/*.css'] }),
      styles({include:['assets/**/*.css']}),
      html({
        minify: { collapseWhitespace: false }
      }),
      sourcemaps(),
      visualizer({
        filename: './dist/stats.html',
        brotliSize: true,
        gzipSize: true,
        sourcemap: true,
        template: 'treemap'
      })
    ]
  }
}
