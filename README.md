#angular-highlight

## A directive to use [highlight.js](highlightjs.org) in angularjs

[![Dependencies Status](https://david-dm.org/travelhubapi/angular-highlight.svg)](https://david-dm.org/travelhubapi/angular-highlight)
[![Build Status](https://travis-ci.org/travelhubapi/angular-highlight.svg)](https://travis-ci.org/travelhubapi/angular-highlight)
[![Issue Count](https://codeclimate.com/github/travelhubapi/angular-highlight/badges/issue_count.svg)](https://codeclimate.com/github/travelhubapi/angular-highlight)
[![Test Coverage](https://codeclimate.com/github/travelhubapi/angular-highlight/badges/coverage.svg)](https://codeclimate.com/github/travelhubapi/angular-highlight/coverage)

## Motivation

Sometimes we need to build dinamic code examples with beautiful colors. To ignore angular elements after compile and some colors, we created this directive

### Installation

```
npm install angular-highlight
```

### Usage

```js
import angular from 'angular';
import 'angular-highlight';

angular.module('app',  ['angular-highlight']);
```

**in html**

import [highlight.js](https://highlightjs.org/download/) css

```html
<head>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/default.min.css">
</head>
```

and then

```html
<pre highlight="javascript" trim-empty-lines="true">

  <span ng-if="true">
  var hello = 'Hello World';
  </span>
  <span ng-if="false">
  var hello = 'Hello you!';
  </span>

  console.log(hello);





</pre>
```
**or**
```html
<highlight language="javascript" trim-empty-lines="true">

  <span ng-if="true">
  var hello = 'Hello World';
  </span>
  <span ng-if="false">
  var hello = 'Hello you!';
  </span>

  console.log(hello);





</highlight>
```

**output a html wrapped by ```<code>``` element with hljs elements/classes to show like:**

```js
  var hello = 'Hello World';

  console.log(hello);

```

raw output

```html
<code class="ng-scope">
  <span class="hljs-keyword">var</span> hello = <span class="hljs-string">'Hello World'</span>;

  <span class="hljs-built_in">console</span>.log(hello);

</code>
```
