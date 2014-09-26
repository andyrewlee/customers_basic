myApp.factory('orderFactory', function(){
  var orders = [];
  var factory = {};

  factory.getOrders = function() {
    return orders;
  }

  factory.addOrder = function(newOrder){
    var current_date = new Date();
    var new_order = {}

    if(newOrder == undefined || newOrder.customerName == '' || newOrder.product == '' || newOrder.quantity == '') {
      return "All fields are required";
    }

    new_order.customerName = newOrder.customer.name;
    new_order.quantity = newOrder.quantity;
    new_order.product = newOrder.product;
    new_order.created_at = new Date();
    orders.push(new_order);
  }
  return factory;
});
myApp.factory('productFactory', function(){
  var products = ['Shoe', 'Hat', 'Shirt'];
  var factory = {};
  factory.getProducts = function(){
    return products;
  }
  return factory;
});

myApp.factory('customerFactory', function(){
  var customers = [];
  var factory = {};
  factory.getCustomers = function(){
    return customers;
  }
  factory.addCustomer = function(info) {
    var new_user = {};
    var current_date = new Date();
    for(i in customers) {
      if(customers[i]['name'] == info) {
        return "The user already exists";
      }
    }
    new_user.name = info;
    new_user.created_at = current_date;
    console.log(new_user.name);
    if(new_user.name == '') {
      return "Write something";
    }
    customers.push(new_user);
  }
  factory.removeCustomer = function(info) {
    customers.splice(info, 1);
  }
  return factory;
});
