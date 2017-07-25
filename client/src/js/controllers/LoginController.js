angular.module('MyApp')
    .controller('LoginController', function($scope, ExadsService) {
        $scope.api_token = '0f42e93f712257ddc2aa419935b27cdc96b9c167'
        $scope.login = function(event) {
            event.preventDefault()
            const { username, password, api_token } = $scope
            ExadsService.login(username, password, api_token)
                .then(() => {
                    console.log("Success logging in")
                })
                .catch(() => {
                    console.log("Error logging in")
                    document.getElementById("error").style.visibility = 'visible'
                    document.getElementById("password").value = ""
                })
        }
    })