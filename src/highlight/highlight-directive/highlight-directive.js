import hljs from 'highlight.js';

export default class HighlightDirective {

  static get directiveName() {
    return 'highlight';
  }

  static directiveFactory($compile, $timeout) {
    HighlightDirective.instance = new HighlightDirective($compile, $timeout);
    return HighlightDirective.instance;
  }

  constructor($compile, $timeout) {
    this.restrict = 'EA';
    this.scope = '=';

    this.bindToController = true;

    this.$compile = $compile;
    this.$timeout = $timeout;
  }

  compile() {
    return this.link;
  }

  link(scope, element, attrs) {
    this.$timeout(() => {
      const language = attrs.highlight || attrs.language;
      const trimEmptyLines = attrs.trimEmptyLines;
      let code;

      code = language === 'html' ? element.html() : element.text();

      if (!code) {
        return;
      }

      if (trimEmptyLines) {
        code = code.replace(/^\s*\n/gm, '\n');
      }

      const highlight = language ? hljs.highlight(language, code) : hljs.highlightAuto(code);
      const html = highlight.value;
      element.html(`<code>${html}</code>`);
      this.$compile(element.contents())(scope);
    });
  }
}

HighlightDirective.directiveFactory.$inject = ['$compile', '$timeout'];
