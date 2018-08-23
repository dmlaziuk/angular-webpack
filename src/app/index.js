import angular from 'angular'
import controller from './controller'
import template from './template.html'
import my from '../my-component'

export default angular.module('app', [my])
  .component('app', {
    template,
    controller,
    controllerAs: 'app'
  })
  .name
