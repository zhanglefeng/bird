var express=require('express');
var request = require('request')

var app = new express();

app.use(express.static('public'));

app.get('/',function(req,res,next){
	res.json(req.headers)
})
var apiBaseUrl = 'http://news-at.zhuhu.com';

app.get(/^\/api\/.+$/,function(req,res,next){
	console.log('star',req.url)

	request.get(apiBaseUrl + req.url,function(err,response,body){
		if(err){
			res.json({})
		}else{
			res.send(body)
		}
	});
});
app.listen(3000,function(){
	console.log("aap.js")
})