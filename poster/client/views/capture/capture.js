Template.capture.events({
    'change .myFileInput' : function(event,template) {

          var file, fileReader;
          file = event.target.files[0];
          fileReader = new FileReader();

          fileReader.onload = function(e) {
            var lastImage;
            Session.set('imgUrl',e.target.result);
            //$('#userImages').append("<img src='" + e.target.result + "' onclick='$(this).remove()' />");
            savePoster(lastImage);
            return lastImage = e.target.result;

          };

          fileReader.readAsDataURL(file);

          ({
            'click #addFile': function() {
              if (lastImage) {
                return Pics.insert({
                  image: lastImage
                });
              }
            },
            'click .storedImage': function() {
              return Pics.remove({
                _id: this._id
              });
            }
          });
         
        $('#capMod').modal('show');

    },
    'click #fakeTap' : function(event, template) {
        event.preventDefault();
        $('.myFileInput').trigger('click');   
    },
    'click .back' : function(){
        Router.go('/');
    },
    'click #capOk' : function(event, template) {
        event.preventDefault();
        $('body').removeClass('modal-open');
        $('.modal-backdrop.fade.in').hide();
        $("#xIssimo").fadeIn("fast");
        function gerrarraheremehn(){Router.go('confirm');}
        setTimeout(gerrarraheremehn,2100);
    }
});

