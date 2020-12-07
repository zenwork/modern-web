   ```js script
import '../dist/index.js'
import { html } from 'lit-element'
```
# Demo

This a simple demo of the `mdjs` capabilities.

[bundle stats](../dist/stats.html)

## `modern-header`

```html preview-story
<modern-header title="A Title">Some nice description</modern-header>
```

## `modern-grid`

```html preview-story
<modern-grid>
<div>
    <h2>FOO BAR</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div>
    <h2>BAR BAZ</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div>
    <h2>BAZ BIZ</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
</modern-grid>
```

## `modern-card`

```html preview-story
<modern-card header="?">
    <div slot="header">The header</div>
    <div slot="body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    consequat. </p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.</p></div>
</modern-card>
```

## `modern-grid` with `modern-card`

```html preview-story
<modern-grid>
<modern-card header="?">
    <div slot="header">The First</div>
    <div slot="body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
</modern-card>
<modern-card header="?">
    <div slot="header">The Second</div>
    <div slot="body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</modern-card>
<modern-card header="?">
    <div slot="header">The Third</div>
    <div slot="body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris . </p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
</modern-card>
</modern-grid>
```

## `modern-footer`

```html preview-story
<modern-footer>This is the footer</modern-footer>
```
