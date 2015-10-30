(function () {
  angular.module("productModule")
    .controller("productSearchController", productSearchController);
  productSearchController.$inject = ['$scope', 'productService', '$routeParams'];
  function productSearchController($scope, productService, $routeParams) {
    //TODO:Build this from the database instead of hardcoding
    $scope.categories = [
      {
        "CategoryID" : 2,
        "CategoryName" : "Condiments",
        "Description" : "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      {
        "CategoryID" : 4,
        "CategoryName" : "Dairy Products",
        "Description" : "Cheeses"
      },
      {
        "CategoryID" : 1,
        "CategoryName" : "Beverages",
        "Description" : "Soft drinks, coffees, teas, beers, and ales"
      },
      {
        "CategoryID" : 5,
        "CategoryName" : "Grains/Cereals",
        "Description" : "Breads, crackers, pasta, and cereal"
      },
      {
        "CategoryID" : 7,
        "CategoryName" : "Produce",
        "Description" : "Dried fruit and bean curd"
      },
      {
        "CategoryID" : 6,
        "CategoryName" : "Meat/Poultry",
        "Description" : "Prepared meats"
      },
      {
        "CategoryID" : 8,
        "CategoryName" : "Seafood",
        "Description" : "Seaweed and fish"
      },
      {
        "CategoryID" : 3,
        "CategoryName" : "Confections",
        "Description" : "Desserts, candies, and sweet breads"
      }
    ];

    $scope.searchString = $routeParams.searchString;

    productService.getAllProducts()
      .then(function (res) {
      $scope.products = res.data;
    }, function (error) {
      console.error("Error getting all products: "+error.data, error);
    });
    console.log($scope.products);
  }
})();