/**
 * Created by Michel on 13/10/2016.
 */
app.controller("consultaApi",["ajax","$scope",function(ajax,$scope){
   var urlConsulta = "http://www.mocky.io/v2/57dfec211000009020598073.json";
   ajax.consulta(urlConsulta ).then(function(data) {
         console.log(data);
       // guarda = [];
       // angular.forEach(data, function (valor, key) {
       //
       //     guarda.push(valor);
       //     // console.log(key);
       //    // guarda.push(key.push(valor));
       //     // console.log(key);
       //     // console.log(key);
       // });

        // console.log(guarda);
        // $scope.guarda = guarda;
       $scope.dados = data;
   })

}])