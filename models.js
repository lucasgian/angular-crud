(function(){
  angular.module('models', []);

  angular.module('models').factory('models', function(Pessoa, Time){
    /**
     * Um objeto pra registrar os meus modelos de coisas persistentes
     */
    var models = {};
    
    models.Pessoa = Pessoa;
    models.Time = Time;
    
    return models;
  });
  
  angular.module('models').factory('Pessoa', function(){
    /**
     * Um construtor de pessoas
     */
    function Pessoa(nome, idade){
      this.nome = nome;
      this.idade = idade;
    }
    
    Pessoa.crud_fields = [
      _field('id', 'id'), 
      _field('nome', 'string'), 
      _field('idade', 'int')
    ];
    
    angular.extend(Pessoa.prototype, {
      aniversario: aniversario
    });
    
    function aniversario(){
      var p = this;
      p.idade++;
    }
    
    return Pessoa;
  });
  
  angular.module('models').factory('Time', function(){
    /**
     * Um construtor de time
     */
    function Time(nome, pais){
      this.nome = nome;
      this.pais = pais;
    }
  
    Time.crud_fields = [
      _field('id', 'id'), 
      _field('nome', 'string'), 
      _field('pais', 'string')
    ];
    
    angular.extend(Time.prototype, {
      corre: corre
    });
    
    function corre(){
      console.log('Time correndo');
    }
    
    return Time;
  });
  
  function _field(name, type){
    return {
      name: name,
      type: type,
    };
  }
})();
