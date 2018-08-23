import angular from 'angular'
import controller from './controller'
import template from './template.html'

export default angular.module('my-component', [])
  .component('my-component', {
    template,
    controller,
    controllerAs: 'my'
  })
  .name
