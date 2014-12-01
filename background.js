function checkForValidUrl(tabId, changeInfo, tab){

	chrome.pageAction.show(tab.id);
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);

var currentIPList = {};
chrome.webRequest.onCompleted.addListener(function(info){
	// console.log(info.ip);
	alert(info.ip);
	return;
},
{
	urls: [],
	types: []
},
[]
);