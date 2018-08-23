import angular from 'angular'
import myComponent from './myComponent'
import about from './about'
import hello from './hello'

export default angular.module('app.components', [])
  .component('myComponent', myComponent)
  .component('about', about)
  .component('hello', hello)
