/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 20 April 2020
* License: Public Domain
*/

// attach click function to our active button
$("#active").click(function(){
	// AJAX function to get data and make it spit it out
  
  $.ajax({
      // The URL for the request
      url: "https://api.covid19api.com/summary",
      // The data to send (seems like nothing but don't be fooled)
      data: { },
      // we are getting info, not putting in info
      type: "GET",
      // The type of data we expect back
      dataType : "json",
  })
  // If this works
  .done(function( results ) {
  	// Insert data into output div
    console.log(results);
    /* var fact = results.facts */[0];
    var confirmed = results.Global.TotalConfirmed;
    $("#output").html("Global COVID-19 cases: " + confirmed);
  })
  // If this fucks up
  .fail(function( xhr, status, errorThrown ) { 
      alert(errorThrown + " Status:" + status );
  });

})