

/////////////////////////////////////////////////////////////  FUNCTIONS


function send (json,cb) {

    chrome.runtime.sendMessage(json,cb);
}


function sendMessage (data, type) {
    var json  = {
	data: data,
	type: type
    };
    send(json,  function(response) {
	//console.log(response.farewell);
    });
    
}


function sendCacheNote (note) {
    var json = {
	data: note,
	type: "sendCache"
    };
    send(json,  function(response) {
	//console.log(response.farewell);
    });
}


function getCacheNote (url,title){

    var json = {
	type: "getCache",
	url: url,
	title: title
    };
    
    send(json,  function(response) {
	
    });
}

/// on receive

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	
	$( "#_ownarea" ).html(request.note);
	$( "#_ownarea" ).focus();
    });




/************************  Initialization code for each page
 ************************************************************  */



/// design mode  ... for time being it is always on

//document.designMode = 'on';

