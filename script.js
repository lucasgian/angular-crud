angular.module('myapp', ['models', 'crud']);

angular.module('myapp').controller('MyCtrl', function($scope, models, CrudApi){
  CrudApi.configure({models: models});
  $scope.models = models;
  $scope.crud_options = {
    fields_dictionary: {
      id: 'Código',
      nome: 'Nome do indivíduo',
      idade: 'Quantos anos tem',
      Pais: 'Raça',
    },
  };
  
  $scope.gentaiada = function(){
    $scope.model = models.Pessoa;
  };
  
  $scope.futebol = function(){
    $scope.model = models.Time;
  };
  
  $scope.gentaiada();
  
});