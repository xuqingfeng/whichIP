$(function(){
	
	$('.ip').empty();

	chrome.runtime.sendMessage({name: "getIP"}, function(response){
		var ip = response.domainToIP;
		$('.ip').text(ip);
	});

})