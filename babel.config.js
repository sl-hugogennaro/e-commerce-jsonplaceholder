const isTest = String(process.env.NODE_ENV) === 'test'

const confEnv = isTest ? { modules: 'commonjs', targets: { node: 'current' } } : { modules: false }

module.exports = {
  presets: [
    [require.resolve('@babel/preset-env'), confEnv],
    require.resolve('@babel/preset-typescript'),
    require.resolve('@babel/preset-react'),
  ],
  plugins: [
    ["@babel/plugin-transform-runtime", { "regenerator": true }],
    "@babel/plugin-proposal-optional-chaining"
  ]
}
