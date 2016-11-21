var $topic = {
    id: 1,
    name: "Top Level",
    parentId: 0
};
var $session = {
    id: null,
    name: ""    
};

var res;


////////////////////////////////     Utility functions

// save history
function saveHistory (url, title) {

    chrome.storage.sync.get('history', function(items) {
	items.history.push({url:url,title:title});
	chrome.storage.sync.set({'history': items.history}, function() {
	    console.log(items.history);
        });
    });	
}
  

// send message to server
function sendRequest  (data,type,method,success,fail) {

    $.ajax({
	method: method,
	url: "http://localhost:8080/api/"+type+"/",
	data: data
    }).done(success).fail(fail);
    
}


//

function sendStatus (sessionId, topicId,success,fail) {

    var json = {

	CurrentTopic: topicId,
	CurrentSession: sessionId
    };

    sendRequest(json,"statuses","PUT",success,fail);
}

// send note

function sendNote (data,sessionId,success,fail) {

    var json = {

	Data: data,
	SessionId: sessionId
    };
    sendRequest(json,"notes","POST",success,fail);
}


// new session name
function setSessionName () {
    return new Date().toLocaleString().replace(',','');
}

// sending new session to server
function sendSession (sessionName,topic,success,fail) {
    var json = {
	    Name: sessionName,
	    TopicId: topic.id
    };
    sendRequest(json,"sessions","POST",success,fail);   
}


function sendLink (info) {

    var json = {
	Data: info.linkUrl,
	SessionId: $session["id"]
    }
    sendRequest(json,"links","POST",function(response){console.log(response["Id"]);},function(){});
}


function sendImage (info) { 

    var json = {
	Src: info.srcUrl,
	SessionId: $session["id"]
    }
    sendRequest(json,"images","POST",function(){},function(){});
}

function sendText (info) { 

    var json = {
	Data: info.selectionText,
	Url: info.pageUrl,
	SessionId: $session["id"]
    }
    sendRequest(json,"texts","POST",function(){},function(){});
}

function sendHistory (history,sessionId){

    var json = {
	Data: history,
	SessionId: sessionId
    };
    sendRequest(json,"histories","POST",function(){},function(){});
}


/////////////////////////////////////////// on message from content script

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
	if (request.type == "note"){
	    //sending note to server
	    sendNote(request.data,$session["id"],function (response) {
		console.log(response["Id"]);
	    },function (response) {
		console.log(response);
	    });
	    
	    sendResponse(
		{
		    farewell: request.data
		});
	    
	}else if (request.type == "sendCache"){
	    chrome.storage.sync.set({'note': request.data}, function() {
		console.log('Settings saved');
            });
	    
	}else if (request.type == "getCache"){
	    chrome.storage.sync.get('note', function(items) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		    chrome.tabs.sendMessage(tabs[0].id,items,function (response) {

		    });
		});
		
	    });
	    
	    saveHistory(request.url,request.title); // save history
	}	
    });




/*
toplevel topic

topic
 session
  note
  text
  image/video
  url
  history


current topic from client  ||  new topic by website
current session || new session by server || by background.js


TOPIC: id name parentId
SESSION: id name TopicId
NOTE: id  note sessionId
LINK: id link sessionId
Image: id srcLink sessionId
Text: id text pageUrl sessionId

history: id data sessionId(unique)

*/

