

Template.home.onRendered ->
  $('head').append('<script src="vendor/js/modernizr.min.js"></script>');
  $('body').append('<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>');
  $('body').append('<script src="vendor/js/bootstrap.min.js"></script>');
  $('body').append('<script src="js/main.js"></script>');




Template.home.helpers
	title: ->
		return RocketChat.settings.get 'Layout_Home_Title'
	body: ->
		return RocketChat.settings.get 'Layout_Home_Body'



# $('head').append('<script src="vendor/js/modernizr.min.js"></script>');
#   $('body').append('<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>');
#   $('body').append('<script src="vendor/js/bootstrap.min.js"></script>');
#   $('body').append('<script src="js/main.js"></script>');
