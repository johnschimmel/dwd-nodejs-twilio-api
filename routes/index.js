
/*
 * routes/index.js
 * 
 * Routes contains the functions (callbacks) associated with request urls.
 */

//require the Twilio module and create a REST client
var twilio = require('twilio')(process.env.TWILIO_ACCT_SID, process.env.TWILIO_AUTH_TOKEN);


/*
	GET /
*/
exports.index = function(req, res) {
	
		
	//Send an SMS text message
	twilio.sendSms({

	    to:'+16467838457', // Any number Twilio can deliver to
	    from: '+14155992671', // A number you bought from Twilio and can use for outbound communication
	    body: 'word to your mother.' // body of the SMS message

	}, function(err, responseData) { //this function is executed when a response is received from Twilio

	    if (!err) { // "err" is an error received during the request, if any

	        // "responseData" is a JavaScript object containing data received from Twilio.
	        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
	        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

	        console.log(responseData.from); // outputs "+14506667788"
	        console.log(responseData.body); // outputs "word to your mother."

	    } else {

	    	console.log(err);
	    }
	});

	res.send("okok");
	// res.render('index.html', templateData);

};
