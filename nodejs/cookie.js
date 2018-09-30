let http = require('http');
let cookie = require('cookie');

http.createServer(function (request, response) {
    console.log(request.headers.cookie);
    var cookies = {};
    if (request.headers.cookie !== undefined) {
        cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies);
    response.writeHead(200, {
        'Set-Cookie': [
            'yummy_cookie=choco',
            'tasty_cookie=strawberry',
            `Permanent=Cookies; Max-Age=${60*60*24*30}`,
            'Secure=SecureCookie; Secure',
            'HttpOnly=HttpOnlyCookie; HttpOnly',
            'Path=PathCookie; Path=/cookie',
            'Domain=DomainCookie; Domain=o2.org'
        ]
    });

    response.end('Cookie!');

}).listen(3000);
console.log('Server Running in 3000 Port');