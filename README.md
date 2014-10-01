# Startup is a starting point for frontend applications

Opinions

- using less because it's faster than sass and does same job, and I'm more used
to it
- using JavaScript instead of CoffeeScript because language is evolving and we
have less compilation to do (...and it looks better for React)
- using [ES6 modules because](https://github.com/esnext/es6-module-transpiler#supported-es6-module-syntax)
we can use them today

## Setup

Prerequisites

```sh
npm install -g bower
npm install -g broccoli-cli
```

Install and/or add the libraries you want.

```sh
npm install
bower install # or bower install -S react
```

## Running

```sh
npm start # or broccoli serve
```

## Build


```sh
npm run build
```

## TODO

- deploy to divshot.com
