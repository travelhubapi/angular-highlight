#angular-highlight

## A directive to use [highlight.js](highlightjs.org) in angularjs

### Usage

```js
import 'angular-highlight';

angular.module('app',  ['angular-highlight']);
```

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

**output a html wrapped by ```code``` element with hljs elements/classes to show like:**

```js
  var hello = 'Hello World';

  console.log(hello);

```

