const { mdjsTransformer } = require('@mdjs/core')

module.exports = {
  nodeResolve: true,
  open: 'docs/docs.md',
  watch: true,
  responseTransformers: [mdjsTransformer]
}
