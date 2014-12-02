$(function(){
	
	$('.ip').empty();


	chrome.runtime.sendMessage({name: "getIP"}, function(response){
		var ip = response.domainToIP;
		// console.log('whichIP:');
		$('.ip').text(ip);
	});
})