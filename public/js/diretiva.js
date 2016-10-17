/**
 * Created by Michel on 13/10/2016.
 */
app.controller("controleInternoDiretiva",["$scope",function($scope){
    $scope.template = "diretivaGrafico.html";

}])
app.directive("descricao",[function(){
    return{
        restrict:'AE',
        transclude:true,
        // controller:'controlerInternoDiretiva',
        scope:{
            titulo:"@",
            texto:"@",
            dados:"@",
        },
        link:function(scope,element,attrs){
            if(scope.item = "Profile"){
                // templateUrl: 'diretivaGrafico.html'
            }else{

            }
        },
        templateUrl: 'diretivaDescricao.html'
    }
}])

app.directive("grafico",[function(){
    return{
        restrict:'AE',
        transclude:true,
        // replace:true,
        scope:{
            item:"@",
            texto:"@"
        },
        templateUrl: 'diretivaDescricao.html'
    }
}])