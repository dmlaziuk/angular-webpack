import angular from 'angular'
import controller from './controller'
import template from './template.html'
import components from './components'

angular.module('app', [components.name])
  .component('app', {
    controller,
    template
  })
