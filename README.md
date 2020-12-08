# Modern-Web Setup

I have developed this project setup as a good starting point for non-trivial web-based libraries or app projects written with [Typescript](https://www.typescriptlang.org/) and [Lit-Element](https://lit-element.polymer-project.org/). It integrates all the great work coming out of the [modern-web](https://modern-web.dev/), [open-wc](https://open-wc.org/), and [Polymer Project](https://www.polymer-project.org/) communities. 

It applies what can be found in their respective documentation in an opinionated way that represents the principles and values I care the most about. It also applies Justin Fugnani's recommendations for publishing web-components (see the checklist below). 

* Develop with native es6 module code.
* Have a great workflow while avoid using single tools that jumble everything.
* Have zero indirection/abstraction between code and web APIs.
  * no virtual DOM in the app
  * no JSDom in the tests
* Integrate web component based development while supporting framework-agnostic integration


The primary purpose of this project is to provide the initial technology integration needed for a complete workflow, ready for all phases of a project:
* live-coding at development time (`web-dev-server`)
* live-coding of tests in the browser (`web-test-runner`, `mocha`, `chai`)
* browser compatibility testing with `playwright`
* live debugging directly in TS code in the browser and in the IDE (tested in IntelliJ/Webstorm but I assume it also works in VS Code)
* easy to create and maintain demo and documentation based on `mdjs` and `web-component-analyzer`

Once setup you should decide if you are creating a library or an app and reasonably soon make the adaptations that make sense. 

## File Structure

* `assets` - static assets
* `config` - shared configuration for web-dev-server, web-test-runner, and rollup
* `docs` - documentation and demos based on `mdjs` and `web-component-analyzer`
* `src` - source code
* `test` - tests


## Usage

First clone this repo and modify the the `package.json` file. Start the live-coding and/or the live-testing

```shell
npm run watch:start
## and/or
npm run watch:test
```

Run the docs with:

```shell
npm run build:bundle ## or watch:bundle
npm run docs

```

### NPM scripts

The integration of the modern-web features are split cleanly into separate scripts

#### serve files scripts

* `start` - run project
* `docs`  - run documentation (requires that the project have been bundled)

#### core scripts

* `lint` - execute eslint
* `lint:fix` - execute eslint and apply any automated fixes
* `tsc` - run the tsc compiler standalone. This is only needed for debugging purposes
* `test` - run all tests once in chrome only
* `prepare` - run lint, tests, and bundling
* `bundle` - bundle project

#### build scripts

* `build:clean ` - delete all temporary directories
* `build:wcspec` - build the web component descriptions
* `build:test  ` - run all tests across firefox, chrome, and safari. It also creates a coverage report.
* `build:bundle` - build the final bundle for production

#### live coding scripts

* `watch:bundle` - bundle project on file change
* `watch:start` - live code the project
* `watch:test` - run all tests in chrome only on file change 

## Resources

* Modern Web - https://modern-web.dev/
* Oppen WC - https://open-wc.org/
    * mdjs - https://open-wc.org/docs/experimental/mdjs/
* Web Component Libraries
    * Lit-Element - https://lit-element.polymer-project.org/
    * Lit-Html - https://lit-html.polymer-project.org/
* Bundling
    * Roll-up - https://rollupjs.org/guide/en/
    

## Web Component Checklist

I am trying to make sure I follow the checklist provided by Justin Fugnani in his [blog](http://104.154.68.174/2019/11/01/how-to-publish-web-components-to-npm/amp/?__twitter_impression=true)

| Recommendation | In this project |
| :------------------- | :------------------- |
|Publish standard ES2017 | 👍 | 
|Publish standard JavaScript modules| 👍 as part of `build:bundle`  |
|Do not use .mjs file extensions| 👍  |
|Only publish a single build| no 😬. publish bundled and un-bundled |
|In package.json, set "type" to "module"|👍   |
|In package.json, set "main" to the main entry point module| 👍  |
|In package.json, set "module" to the same file as "main"| 👍  |
|In package.json, include polyfills in devDependencies, not dependencies| 👍 . Currently like that but I think this one is debatable. It is not always clear to me that dependencies should be exposed to downstream consumers |
|Do not bundle| 👍 ...I go both ways here |
|Do not minify| 👍  |
|Always self-define elements| 👍  |
|Export element classes| 👍  |
|Do not import polyfills into modules| 👍  |
|Import dependencies with "bare" or "named" import specifiers| 👍  |
|Always include file extensions in import specifiers| no 😬. Not currently using import maps |
|Publish a custom-elements.json file documenting your elements| 👍  |
|Include good TypeScript typings| 👍  |
