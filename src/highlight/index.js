import HighlightDirective from './highlight-directive/highlight-directive.js';

export default angular.module('angular-highlight', [])
  .directive(HighlightDirective.name, HighlightDirective.directiveFactory);
//  .directive(HighlightDirective.name, () => new HighlightDirective);
