var request = new XMLHttpRequest();
request.open('GET', 'data.txt', false);
// third var is for asynchronos request
request.send();
console.log(request);