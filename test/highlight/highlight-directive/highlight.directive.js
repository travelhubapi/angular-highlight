/* eslint-disable no-multiple-empty-lines */
/* eslint-disable func-names */
describe('Unit: Highlight directive', function () {
  let $compile;
  let $rootScope;

  beforeEach(function () {
    angular.mock.module('angular-highlight');

    angular.mock.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it('should bind a highlightjs class', angular.mock.inject(function ($timeout) {
    const element = $compile(`
      <highlight language="javascript">
        console.log('Hello');
        alert('Hello');
      </highlight>`
    )($rootScope);
    $rootScope.$digest();
    $timeout.flush();
    expect(element.find('code').html()).toContain('hljs-built_in');
  }));

  it('should auto detect language', angular.mock.inject(function ($timeout) {
    const element = $compile(`
      <highlight>
        console.log(' arroz ');
      </highlight>`
    )($rootScope);
    $rootScope.$digest();
    $timeout.flush();
    expect(element.find('code').html()).toContain('hljs-built_in');
  }));

  it('should trim empty lines', angular.mock.inject(function ($timeout) {
    const linesExpected = 5;
    const content = `
      <highlight language="javascript" trim-empty-lines="true">




        alert('spaces');






      </highlight>`;
    const element = angular.element(content);
    expect(element.text().split('\n').length).toBeGreaterThan(linesExpected);
    $compile(element)($rootScope);
    $rootScope.$digest();
    $timeout.flush();
    expect(element.text().split('\n').length).toBeLessThan(linesExpected);
  }));

  it('should format a html code', angular.mock.inject(function ($timeout) {
    const element = $compile(`
      <highlight language="html">
        <html>
          <head></head>
          <body>
            <div>
              <h1>Hello World!</h1>
            </div>
          </body>
        </html>
      </highlight>`
    )($rootScope);
    $rootScope.$digest();
    $timeout.flush();
    expect(element.find('code').html()).toContain('hljs-tag');
  }));
});
