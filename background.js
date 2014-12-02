function checkForValidUrl(tabId, changeInfo, tab){

	chrome.pageAction.show(tab.id);
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

// 利用 webRequest 获取 IP
// var currentIPList = {};
// chrome.webRequest.onCompleted.addListener(function(info){
// 	currentIPList[ info.url ] = info.ip;
// 	return;
// },
// {
// 	urls: [],
// 	types: []
// },
// []
// );
// chrome.webRequest.onBeforeRequest.addListener(function(info){
// 	currentIPList[ info.url ] = info.ip;
// },FILTER_ALL_URLS);

// 提供 whichIP.js 所需要的 IP
chrome.runtime.onMessage.addListener(

	function(request, sender, sendResponse){


		if(request.name=='getIP'){
			// var currentUrl = sender.tab ? sender.tab.url : "from extension";
			// var url = getUrl();
			var url = 'lol';
			
			// if(currentIPList[currentUrl] !== undefined){
			// 	sendResponse({
			// 		domainToIP: 'no'
			// 	});
			// }else{
			// 	sendResponse({
			// 		domainToIP: '404'
			// 	});
			// }
			// var currentUrl = 'currentUrl';
			sendResponse({domainToIP: url});
		}else{
			sendResponse({domainToIP: 'null'});

		}

		// switch(request.name){
		// 	case "getIP":
		// 		var currentUrl = sender.tab.url;
		// 		sendResponse({
		// 				domainToIP: '403'
		// 			}
		// 		);
		// 		// if(currentIPList[currentUrl] !== undefined){
		// 		// 	sendResponse({
		// 		// 		domainToIP: 'no'
		// 		// 		// domainToIP: '127.0.0.1'
		// 		// 	});
		// 		// 	// console.log('background:'ip);
		// 		// }else{
		// 		// 	sendResponse({
		// 		// 		domainToIP: '404'
		// 		// 	}
		// 		// 	);
		// 		// }
		// 		break;
		// 	default:
		// 		sendResponse({domainToIP: 'default'});
		// }
	}
);

function getUrl(){
	chrome.tabs.getCurrent(function(tab){
		return tab.url;
	});
};

