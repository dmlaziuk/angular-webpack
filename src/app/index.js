import angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import components from './components'
import services from './services'
import controller from './controller'
import template from './template.html'

angular.module('app', [uiRouter, components.name, services.name])
  .component('app', {
    controller,
    template
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('hello', {
        url: '/hello',
        component: 'hello',
        resolve: {
          name: nameService => nameService.getName()
        }
      })
      .state('about', {
        url: '/about',
        component: 'about',
        resolve: {
          about: nameService => nameService.getAbout()
        }
      })
    $urlRouterProvider.otherwise('/')
  })
