var http = require('http');

exports.testListApi = function(req,res,next){
    res.send(blah);
}

exports.testGet = function(req, res, next){
    
    res.send("blah");
}

exports.testPost = function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;

    var options = {
        hostname: 'www.httpwatch.com',
        path: '/httpgallery/authentication/authenticatedimage/default.aspx',
        headers: {
            Authorization: 'Basic ' + new Buffer(username + ':' + password).toString('base64')
        }
    };

    var request = http.request(options, function(response){
        console.log('STATUS'+request.statusCode);
        console.log('HEADERS: '+JSON.stringify(response.headers));
        response.setEncoding('utf8');
        response.on('data', function(chunk){
            console.log('BODY: '+chunk);
        });
    });
    request.end();
    //http://www.httpwatch.com/httpgallery/authentication/authenticatedimage/default.aspx
    res.send(JSON.stringify(response.headers));
    

}