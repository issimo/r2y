if (Meteor.isClient) {
  // counter starts at 0

}

if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup
    });
}

Router.configure({
    layoutTemplate: 'main'    
});

Router.route('/',{name:'home',template:'home',layoutTemplate: 'main'});
Router.route('/capture',{layoutTemplate:'capture'});
Router.route('/nav');
Router.route('/postcard');
Router.route('/footer');
Router.route('/confirm',{layoutTemplate:'confirm'});
Router.route('/share',{layoutTemplate:'share'});
Router.route('/admin');
