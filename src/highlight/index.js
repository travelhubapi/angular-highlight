import HighlightDirective from './highlight-directive/highlight-directive.js';

export default angular.module('angular-highlight', [])
  .directive(HighlightDirective.directiveName, HighlightDirective.directiveFactory);
