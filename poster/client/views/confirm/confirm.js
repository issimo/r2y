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
