
Router.route('/home', 
  {
    path:  ['/home', '/'],
    action: function () {
    // render all templates and regions for this route
    FlowRouter.go('home');
  }
  });




Router.route('/call/:id', {
    path:  ['/call/:id', 'home/call/:id'],
    onBeforeAction: function(){
        console.log("You triggered 'onBeforeAction' for 'listPage' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            FlowRouter.go('home');
        }
    },
    action: function () {
    // render all templates and regions for this route
    var id = this.params.id;
    var res2= "/callnumber/".concat(id);
    Router.go(res2);
  }   
});










Router.route('/callnumber/:id', function () {
  var params = this.params; 
  var id = params.id;
   // Configure the Twilio client
 twilio = Twilio('YOUR_AUTH_ID', 
  'YOUR_AUTH_TOKEN');

  twilio.makeCall({
    to:id,
    url: 'http://demo.twilio.com/docs/voice.xml', // Any number Twilio can call
  }, function(err, responseData) {
    //executed when the call has been initiated.
    if(err)
    {
    	console.log("phone call disconnect error message" + err.message);
    }
    else{
    	console.log(responseData.from);
    }    
     // outputs "+14506667788"
  });
}, {where: 'server'});






