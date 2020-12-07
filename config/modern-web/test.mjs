import commonjs            from '@rollup/plugin-commonjs'
import { fromRollup }      from '@web/dev-server-rollup'
import { defaultReporter } from '@web/test-runner-cli'
import { junitReporter } from '@web/test-runner-junit-reporter'
import baseConfig        from './_base.mjs'

const commonjsPlugin = fromRollup(commonjs)

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    commonjsPlugin({
      exclude: [/node_modules\/chai-a11y-axe/, /node_modules\/chai/]
    })
  ],
  coverageConfig: {
    report: true,
    reportDir: '.coverage',
    threshold: {
      statements: 50,
      branches: 50,
      functions: 0,
      lines: 50
    }
  },
  reporters: [
    defaultReporter(),
    junitReporter({
      outputPath: './results/test-results.xml',
      reportLogs: true
    })
  ],
  browserStartTimeout: 60000,
  testFramework: {
    config: {
      timeout: 7000
    }
  }
}
