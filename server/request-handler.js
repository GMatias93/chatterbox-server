/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
//server/server/request-handler.js is a nearly-empty file where you'll do your work.
//here is a change


var _ = require('underscore');

var exports = module.exports = {};

exports.requestHandler = function(request, response) {
    // Request and Response come from node's http module.
    //
    // They include information about both the incoming request, such as
    // headers and URL, and about the outgoing response, such as its status
    // and content.
    //
    // Documentation for both request and response can be found in the HTTP section at
    // http://nodejs.org/documentation/api/

    // Do some basic logging.
    //
    // Adding more logging to your server can be an easy way to get passive
    // debugging help, but you should always be careful about leaving stray
    // console.logs in your code.
    console.log("Serving request type " + request.method + " for url " + request.url);
  //request is a method with a method....which has a property called url.
    // The outgoing status.
    var statusCode = 200;


    // See the note below about CORS headers.
    var headers = exports.defaultCorsHeaders;

    // Tell the client we are sending them plain text.//changed.
    // You will need to change this if you are sending something
    // other than plain text, like JSON or HTML.
    headers['contentType'] = "application/json";

    // .writeHead() writes to the request line and headers of the response,
    // which includes the status and all headers.
    // response.writeHead(statusCode, headers);
    
    // for (key in response) {
    // console.log('response is:',response.key);
    // };

    //created an object 
    var data = {
        //gave it an array called results
        results : [],
    };

    // var obj = {
    //     username: ''  
    // }


    if (request.method === 'GET') {
        response.writeHead(statusCode, headers);        
        // response.write(JSON.stringify(data));
        response.end(JSON.stringify(data));
    } else if (request.method === 'POST'){

        console.log('request.json iisssssssssss:', request);
        //push post data into end:
        data.results.push(request.json);
        //modify data as requested
        //update the stored value of the data
        response.writeHead(201, headers);
        response.end(JSON.stringify(data));
    }
    // if (request.method === 'PUT') { //
    //     response.writeHead(statusCode, headers);  
    //     console.log('Server says: "Data update request received and processed."')
    //     response.end()
    // if (request.method === 'POST') {
    //     response.writeHead(statusCode, headers);        
    //     response.end()




    // } else if (request.method === 'DELETE') {
    //     response.writeHead(statusCode, headers);        
    //     response.end()

    // } else if (request.method === 'OPTIONS') {
    //     response.writeHead(statusCode, headers);
    //     response.end()

    // } else {

        // response.write('here is lots of data');
    //response.write(JSON.parse(body));

    // Make sure to always call response.end() - Node may not send
    // anything back to the client until you do. The string you pass to
    // response.end() will be the body of the response - i.e. what shows
    // up in the browser.
    //
    // Calling .end "flushes" the response's internal buffer, forcing
    // node to actually send all the data over to the client.
        // response.end('something else');

  };
// console.log(exports.requestHandler);
// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
  exports.defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10 // Seconds.
  };

//NEXT STEPS BRAINSTORM: 
//  make an event listener - if server receives GET requst, then it parses it, 



