// 利用 webRequest 获取 IP
var currentIPList = {};

var url;
var ip;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	url = tab.url;
});

chrome.webRequest.onCompleted.addListener(function(details){
	currentIPList[details.url] = details.ip;
	return;
},
{
urls: [ "<all_urls>"],
types: []
},[]);

// 提供 whichIP.js 所需要的 IP
chrome.runtime.onMessage.addListener(

	function(request, sender, sendResponse){

		if(request.name=='getIP'){

			if(currentIPList[ url ] != undefined){
				sendResponse({domainToIP: currentIPList[ url ]});
			}else{
				sendResponse({domainToIP: '404'});				
			}

		}else{
			sendResponse({domainToIP: 'null'});

		}
	}
);


