# Initial React Setup

## Description
This project contains the basic set up for React development. this project uses the following:
* **Yarn** package manager
* **Webpack** for script bundling
* **Babel** transpile JSX and ES6 to ES2015
## Versions
* Node       : v7.7.1
* Npm        : 4.1.2
* Yarn       : v0.27.5

## initial Set up *Yarn*

* Download and install [Yarn](https://yarnpkg.com/en/)
* In your terminal navigate under the project folder and run this 
```
yarn
```
or
```
yarn install
```
this command will install every depencency listed in your `package.json`

Read the [docs](https://yarnpkg.com/en/docs/usage) for more info about yarn usage

`yarn.lock` contains the list of dependencies with the correct version for this project. This file is generated when installing dependencies using yarn

## initial Set up *npm*
run :
```
npm install
```
if development dependencies are missing run:
```
npm install --only=dev
```
## webpack.config.json

`entry`: Specifies the entry file where the bundler starts the bundling process.
`output`: Specifies the location where the bundled Javascript code is to be saved.
```
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  }
```

`loaders` are transformations applied to the files.
`babel-loader` goes through and transpiles every file that ends with a `.js` or `.jsx`.
```
loaders: [
  //transform js and JSX files
  { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
  { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
]
```

`inject` tells the plugin to inject the bundled content at the bottom of `body`
```
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

...

plugins: [HtmlWebpackPluginConfig]
```
### package.json
`start` runs development server `http://localhost:8080`.
`build` creates the production build on `dist` folder.
```
"scripts": {
    "start": "webpack-dev-server",
    "build": "webpack -p"
  }
```