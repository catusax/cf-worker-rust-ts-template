const path = require('path')
const webpack = require('webpack')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
const { dirname } = require('path')

const mode = process.env.NODE_ENV || 'production'

module.exports = {
  entry: './ts/index.ts',
  output: {
    filename: `worker.${mode}.js`,
    path: path.join(__dirname, 'dist'),
  },
  mode,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.wasm'],
    plugins: [],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.wasm$/,
        type: 'webassembly/experimental',
      },
    ],
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, '.'),

      // Check https://rustwasm.github.io/wasm-pack/book/commands/build.html for
      // the available set of arguments.
      //
      // Optional space delimited arguments to appear before the wasm-pack
      // command. Default arguments are `--verbose`.
      args: '--log-level warn',
      // Default arguments are `--typescript --target browser --mode normal`.
      //extraArgs: "--no-typescript",
      //extraArgs: "--target bundler",

      // Optional array of absolute paths to directories, changes to which
      // will trigger the build.
      // watchDirectories: [
      //   path.resolve(__dirname, "another-crate/src")
      // ],

      // The same as the `--out-dir` option for `wasm-pack`
      outDir: 'node_modules/wasm_module',

      // The same as the `--out-name` option for `wasm-pack`
      // outName: "index",

      // If defined, `forceWatch` will force activate/deactivate watch mode for
      // `.rs` files.
      //
      // The default (not set) aligns watch mode for `.rs` files to Webpack's
      // watch mode.
      // forceWatch: true,

      // If defined, `forceMode` will force the compilation mode for `wasm-pack`
      //
      // Possible values are `development` and `production`.
      //
      // the mode `development` makes `wasm-pack` build in `debug` mode.
      // the mode `production` makes `wasm-pack` build in `release` mode.
      // forceMode: "development",

      // Controls plugin output verbosity, either 'info' or 'error'.
      // Defaults to 'info'.
      // pluginLogLevel: 'info'
    }),
  ],
}
