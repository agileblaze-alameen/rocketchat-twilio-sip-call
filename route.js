
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
 twilio = Twilio('AC99423bdfe5fb929f7ef2a7b9b9c56193', 
  '3a82a0ada40a21ce2b89288f642068c9');

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






