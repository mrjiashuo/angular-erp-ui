// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var itemListModule = angular.module('itemListModule', []);

// use the myAppModule variable to
// configure the module with a controller
itemListModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var someDate = {
            code: '编码',
            name: '品名',
            type: '类型',
            color: '颜色',
            inventory number: '库存数',
            check number:'盘点数'
        };
        $scope.data = someDate;
    }
);

// use the myAppModule variable to
// configure the module with a filter
itemListModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
