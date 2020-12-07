# Modern-Web Dev Setup

I have developed this project setup as a good starting point for non-trivial web-based libraries or web application 
projects. It integrates all the creat work coming out of the modern-web and open-wc communities. It also embodies the principles 
and values I care the most about.

* native es6 module code
* zero indirection/abstraction between code and web APIs
  * no virtual DOM
  * no JSDom
* web component based development targeting framework-agnostic integration


The primary purpose of this project is to provide a good technology integration that is ready to work in all phases of a project:
* live-coding at development time
* live-coding of tests in the browser
* debugging of TS code in the browser and in the IDE (even after bundling)
* easy to create and maintain demo and documentation

Once setup you should decide if you are creating a library or an app and reasonably soon make the adaptations that make sense. 

## Resources

* Modern Web - https://modern-web.dev/
* Oppen WC - https://open-wc.org/
    * mdjs - https://open-wc.org/docs/experimental/mdjs/
* Web Component Libraries
    * Lit-Element - https://lit-element.polymer-project.org/
    * Lit-Html - https://lit-html.polymer-project.org/
* Bundling
    * Roll-up - https://rollupjs.org/guide/en/

## Usage

First clone this repo and modify the the `package.json` file. Start the live-coding and/or the live-testing

```shell
npm run watch:start
## and/or
npm run watch:test
```

### NPM scripts

The integration of the modern-web features are split pretty cleanly into separate scripts

#### serve files scripts

* `start` - run project
* `docs`  - run dynamic documentation

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
* `build:test  ` - run all tests across firefox, chrome, and safari
* `build:bundle` - build the final bundle for production

#### live coding scripts

* `watch:bundle` - bundle project on file change
* `watch:start` - live code the project
* `watch:test` - run all tests in chrome only on file change 
                                 

## To Do:
* create simple test
* add some e2e test that proves most features work
