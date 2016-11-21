function setSession() {
    
    $session.name = setSessionName();
    // send session info
    sendSession($session.name, $topic, function (response) {
	$session["id"] = response["Id"];
	chrome.storage.sync.set({'sessionId': $session["id"]}, function() {
	    /*
	    sendStatus($session.id,$topic.id, function (response) {

		console.log(response);
	    }, function (response) {

		console.log(response);
	    });*/
	    console.log($session["id"]);
	});
	
    },function (response) {
	console.log(response);
    });

}

/*************************  Context Menu Items ***************/


chrome.contextMenus.create({
    title: "Send Text",
    contexts: ["selection"],
    onclick: sendText
});


chrome.contextMenus.create({
    title: "Send Image",
    contexts: ["image"],
    onclick: sendImage
});


chrome.contextMenus.create({
    title: "Send Link",
    contexts: ["link"],
    onclick: sendLink
});


/*************************************  Start *******************/


console.log("new session");

//$session["id"] = 12;
//setting session


/// save previous history

chrome.storage.sync.get('history', function(items) {
    var data = JSON.stringify(items.history);
    chrome.storage.sync.get('sessionId', function(old) {
	sendHistory(data,old.sessionId);
	chrome.storage.sync.set({'history': []}, function() {
	    setSession();
        });
	
    });

});
    
