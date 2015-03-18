/**
 * Created by user_12 on 17/03/15.
 */
var http = require('http');
var url = require('url');

var counter = 0;

var server = new http.Server(function(req, res) {

    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if (urlParsed.pathname == '/index.html') {
        res.setHeader('Content-type','text/html;charset=utf-8');
        ++counter;
        res.end("Привіт світ!");
    }else if (urlParsed.pathname == '/count.html'){
        res.setHeader('Content-type','text/html;charset=utf-8');
        res.end("Зробили запитів до \"Привіт світ!\" " + counter +""
                +(((counter == 1)?" раз":(counter<5 && counter>1)?" рази":" разів")));
    }

    else {
        res.statusCode = 404; // Not Found
        res.end("Page not found");
    }

});

server.listen(8085, '127.0.0.1');
