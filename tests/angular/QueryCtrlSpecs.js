describe('soqlApp', function() {

  beforeEach(module('soqlApp'));

  it('should have a QueryCtrl controller', function() {
    expect(soqlTool.QueryCtrl).toBeDefined();
  });

  // var $controller;

  // beforeEach(inject(function(_$controller_){
  //   // The injector unwraps the underscores (_) from around the parameter names when matching
  //   $controller = _$controller_;
  // }));

  // describe('$scope.queryString', function() {

  //   it('should allow the user to query records', function() {

  //   });

  // });

  // it('should allow the user to export', function() {

  // });
});