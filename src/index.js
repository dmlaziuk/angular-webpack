import angular from 'angular'

class RootController {
  constructor () {
    this.value = 'AngularJS 1.7.3'
  }
}

const moduleName = 'app'

angular.module(moduleName, [])
  .controller('RootController', RootController)

export default moduleName
