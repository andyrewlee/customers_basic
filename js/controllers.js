myApp.controller('CustomersController', function($scope, customerFactory){
  $scope.errors = "";
  $scope.customers = customerFactory.getCustomers();
  $scope.addCustomer = function(){
                         $scope.errors = customerFactory.addCustomer($scope.newCustomer.name);
                       }
  $scope.removeCustomer = function($index){ customerFactory.removeCustomer($index); };
});

myApp.controller('OrdersController', function($scope, customerFactory, productFactory, orderFactory){
  $scope.errors = ""
  $scope.customers = customerFactory.getCustomers();
  $scope.orders = orderFactory.getOrders();
  $scope.products = productFactory.getProducts();
  $scope.addOrder = function() {
                      $scope.errors = orderFactory.addOrder($scope.newOrder);
                   }
});


