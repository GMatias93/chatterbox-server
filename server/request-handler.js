


var _ = require('underscore');

var exports = module.exports = {};

exports.requestHandler = function(request, response) {

    console.log("Serving request type " + request.method + " for url " + request.url);

    var statusCode = 200;


    // See the note below about CORS headers.
    var headers = exports.defaultCorsHeaders;


    headers['contentType'] = "application/json";



    //created an object 
    var data = {
        //gave it an array called results
        results : [],
    };



    var objectId = {username: 'Jono', message: 'Do my bidding!'};
    // same as results[0]

    console.log('request.url is:',request.url);

    if (request.method === 'GET') {
            if (request.url === '/arglebargle') {
            response.writeHead(404, headers);        
            response.end();
        }        
        response.writeHead(statusCode, headers);        
        // response.write(JSON.stringify(data));
        response.end(JSON.stringify({results : [objectId]}));

    } else if (request.method === 'POST'){
        // console.log('request.json i:', request);
        //push post data into end:
        data.results.push(request.json);
        //modify data as requested
        //update the stored value of the data
        response.writeHead(201, headers);
        response.end(JSON.stringify(data));
    } else if (request.method === 'OPTIONS') {
        response.writeHead(statusCode, headers);
    }
    
  };



  exports.defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10 // Seconds.
  };





