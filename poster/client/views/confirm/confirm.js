Template.confirm.rendered = function() {
    var url = String(Session.get('url'));
    url = url.replace(/"/g, '');
    setTimeout(console.log("New url"),5000);
    console.log(url);
}

Template.confirm.events({
  
    'click .delete' : function(){
        //Router.go('/');
    },
    'click .accept' : function(){
        html2canvas($('.cptCnt'), {
            onrendered: function(canvas) {
                canvas.setAttribute("id", "canvas");
                document.body.appendChild(canvas);
            }
        });
        //Router.go('/share');
    },
    'click .retake' : function(){
        //Router.go('/capture');
    }
});

Template.confirm.helpers({
    posters: function() {
        return Posters.find();
    }
});
