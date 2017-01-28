var http = require("http");
var fs = require('fs');

http.createServer( function(req,res){
  fs.readFile('./sachin.csv', function(error, content) {
       if (error) {
           if(error.code == 'ENOENT'){
               fs.readFile('./404.html', function(error, content) {
                   response.writeHead(200, { 'Content-Type': contentType });
                   response.end(content, 'utf-8');
               });
           }
           else {
               response.writeHead(500);
               response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
               response.end();
           }
       }
       else {
           response.writeHead(200, { 'Content-Type': contentType });
           response.end(content, 'utf-8');
       }
   });
}).listen(PROCESS_ENV_PORT || 3000);
