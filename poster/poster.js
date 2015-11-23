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

Router.route('/',{name:'home',template:'home',layoutTemplate: 'main',data:function(){
    $('#xIssimo').show();
    beforeload = (new Date()).getTime();
    function pageloadingtime(){
        afterload = (new Date()).getTime();
        secondes = (afterload-beforeload);
        console.log(secondes);
        setTimeout(function(){$('#xIssimo').hide()},secondes);
    
}
window.onload = pageloadingtime;
    
}
                 });

Router.route('/capture',{layoutTemplate:'capture'});
Router.route('/nav');
Router.route('/postcard');
Router.route('/footer');
Router.route('/confirm',{layoutTemplate:'confirm'});
Router.route('/share',{layoutTemplate:'share'});
Router.route('/admin');
