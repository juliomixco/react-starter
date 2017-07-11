# Initial React Setup

## Description
This project contains the basic set up for React development. this project uses the following:
* *Yarn* package manager
* *Webpack* for script bundling
* *Babel* transpile JSX and ES6 to ES2015
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