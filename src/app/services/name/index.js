export default class NameService {
  constructor () {
    this.about = 'AngularJS 1.7.3'
    this.name = 'angular-webpack-es2015'
  }
  getAbout () {
    return this.about
  }
  getName () {
    return this.name
  }
}
