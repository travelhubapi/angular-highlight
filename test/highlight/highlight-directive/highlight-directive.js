
describe('Unit: Highlight directive', function () {

  let $compile,
      $rootScope;

  beforeEach(function () {
    angular.mock.module('angular-highlight')

    angular.mock.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it('should bind a highlightjs class', function () {
    const element = $compile(`
      <highlight language="javascript">
        console.log(' arroz ');
      </highlight>`
    )($rootScope);
    $rootScope.$digest();
    expect(element.find('code').html()).toContain('hljs-built_in');
  });

  it('should auto detect language', function () {
    const element = $compile(`
      <highlight>
        console.log(' arroz ');
      </highlight>`
    )($rootScope);
    $rootScope.$digest();
    expect(element.find('code').html()).toContain('hljs-built_in');
  });

  it('should trim empty lines', function () {
    const linesExpected = 5;
    const content = `
      <highlight language="javascript" trim-empty-lines="true">




        console.log(' arroz ');






      </highlight>`;
    let element = angular.element(content);
    expect(element.text().split('\n').length).toBeGreaterThan(linesExpected);
    $compile(element)($rootScope);
    $rootScope.$digest();
    expect(element.text().split('\n').length).toBeLessThan(linesExpected);
  });

  it('should format a html code', function () {
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
    expect(element.find('code').html()).toContain('hljs-tag');
  });

//  it('should ignore tags (angular elements with ignore attribute) in a html code', function () {
//    var element = $compile(`
//      <highlight language="html">
//        <html>
//          <head></head>
//          <body>
//            <div>
//              <h1 ng-if="false" ignore>Hello World!</h1>
//            </div>
//          </body>
//        </html>
//      </highlight>`
//    )($rootScope);
//    $rootScope.$digest();
//    console.log(element.html());
//    expect(element.find('code').html()).not.toContain('ng-if');
//  });

});
