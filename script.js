var request = new XMLHttpRequest();
request.open('GET', 'data.txt', false);
// third var is for asynchronos request
request.send();
if (request.status===200){
	console.log(request);
	document.writeln(request.reponseText);
}