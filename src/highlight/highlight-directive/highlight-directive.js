import hljs from 'highlight.js';

export default class HighlightDirective {

  static get name() {
    return 'highlight';
  }

  static directiveFactory($compile) {
    HighlightDirective.instance = new HighlightDirective($compile);
    return HighlightDirective.instance;
  }

  constructor($compile) {
    this.restrict = 'EA';
    this.scope = '=';

    this.bindToController = true;

    this.$compile = $compile;
  }

  compile() {
    return this.link
  }

  link(scope, element, attrs) {
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
    element.html(`<code>${html}</code>`)
    this.$compile(element.contents())(scope);
  }
}

//HighlightDirective.$inject = ['$compile', '$timeout'];
HighlightDirective.directiveFactory.$inject = ['$compile'];
