Router.configure({
  layoutTemplate: 'layout'
});
Router.map(function () {
  this.route('news', {path: '/news'});
  this.route('home', {path: '/'});
});
