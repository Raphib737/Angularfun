var express = require('express');
var app = express();

app.get('/',function(request,response){
	console.log(response);
	console.log(request);
	response.send("hello World");
});

app.listen(3000);
console.log("listening on port 3000")
