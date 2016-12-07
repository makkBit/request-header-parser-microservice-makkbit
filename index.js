const express = require('express');
const fs = require('fs');
const app = express();


const port = process.env.PORT || 8080;

app.set('views', './views');
app.set('view engine', 'pug');
app.enable('trust proxy')


app.get('/', (req, res) => {
	res.render("index");
});

app.get('/api/whoami', (req,res) => {
	//ip
	let clientIp = req.ip;
	let ipResult = clientIp.slice(clientIp.indexOf('1'), clientIp.length);

	//lang
	let clientLang = req.headers['accept-language'];
	let langResult = clientLang.slice(0, clientLang.indexOf(','));

	//os
	let clientOs = req.headers['user-agent'];
	let osResult = clientOs.slice(clientOs.indexOf(';')+2, clientOs.indexOf(')') );

	res.json({
		ipaddress: ipResult,
		language:langResult,
		os: osResult
	});

});





app.listen(port, () => {
	console.log("app listening on port: "+port);
});
