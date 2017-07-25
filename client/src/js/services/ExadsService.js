angular.module('MyApp')
    .factory('ExadsService', function($http) {
        function login(username, password, api_token) {
          console.log(`USER: ${username}, PASS: ${password}, KEY: ${api_token}`)
            return $http({
              method: 'POST',
              url: 'https://api.exoclick.com/v2/login',
              data: {username, password},
              headers: {'Content-Type': 'application/json'}
            })
        }

        return { login }
    })