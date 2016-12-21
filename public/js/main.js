/* ==========================================================================
   main.js
   ========================================================================== */
var $j = jQuery.noConflict();


$j(function(){
    var dials = $j(".dials ol li");
    var body=$j("body");
    var index;
    var number = $j(".number");
    var total;
    var totalnumber;
    

/*
  this function invoke when single tap
  the dialer and display the index of the dialer.
*/
    dials.click(function(){
        index = dials.index(this);
        if(index == 9){
                    number.val(number.val() + "*");
                    
        }else if(index == 10){
            
            number.val(number.val() + "0");
        }else if(index == 11){
            number.val(number.val() + "#");
        }else if(index == 12){
            number.val('');
        }else if(index == 13){
            total = number.text();
            total = total.slice(0,-1);
           number.val('' + total);
        }else if(index == 14){
        totalnumber=$( ".number" ).html();       
       var res2= "/call/".concat(totalnumber);     

       Router.go(res2);        
                 //add any call action here           
        }else{ 
          var newindex=index+1;
          number.val(number.val() + newindex);; 
           }        
    });

/*
this function invoke when double tap on the dialer 
and display the second tag in the dialer.
*/


dials.dblclick(function() {
  index=dials.index(this);
  if(index==10)
  {
    total = number.text();
            total = total.slice(0,-2);
            number.empty().append(total).append("+");
              }
  });

/*

*/

body.keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    
    var list = [];
    for (var i = 97; i <= 122; i++) {
    list.push(i);
    }
    var typednumber=[35,42,43,48,49,50,51,52,53,54,55,56,57];
    var res = typednumber.concat(list);
    console.log(jQuery.inArray(keycode, res));
    if(jQuery.inArray(keycode, res) !== -1)
    {
        number.append(String.fromCharCode(keycode));
    }
    if(keycode==8)
    {
      total = number.text();
      total = total.slice(0,-1);
      number.empty().append(total);

    }
});

  
});


