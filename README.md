# StyleBase

> Simple front end tool chain and library to get projects up-and-running quickly

## Features

- A Grunt workflow with both Development and Production builds
- A basic RequireJS example setup
- A base CSS library, in both Sass (SCSS) and Less, with a set of useful, tools, objects and utilities
- CSS stats reporting
- A few usual JavaScript polyfills an utilities, such as Picturefill and EqualizeHeights

**Note:** The CSS follows a [BEM 'style'](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) and [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) methodology.

## Requirements

Assumes you already have Node/NPM, Grunt and Bower installed.

## Installation

### Clone the repo

```bash
git clone https://github.com/gpmd/stylebase.git stylebase
```

### Install the project dependencies

```bash
bower install
npm install
```

### Run the build

Running `grunt` defaults to Sass (SCSS) and the Production build.

```bash
grunt
```

Various other build options are available. For example, if you would like to use Less and run the Development build:

```bash
grunt --preprocessor=less --env=dev
```

### Build options

**Use Sass (SCSS):**

```bash
--preprocessor=sass
```

**Use Less:**

```bash
--preprocessor=less
```

**Dev build:**

```bash
--env=dev
```

**Production build:**

```bash
--env=prod
```

---

Created by [Matt Bailey](http://mattbailey.io/).
