const http = require('http');
const cookie = require('cookie');

http.createServer(function (request, response) {
    let cookies = {};
    if (request.headers.cookie !== undefined) {
        cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies);
    // response.writeHead(200, {
    //     'SET-Cookie': ['Yummy_Cookie=choco',
    //      'Tasty_Cookie=strawberry',
    //      `Permanent=Cookies; Max-Age=${60*60*24*30}`,
    //      'Secure=Secure; Secure',
    //      'HttpOnly=HttpOnly; HttpOnly',
    //      'Path=Path; Path=/cookie'
    //     ]
    // })
    response.end('Coookie!!');
}).listen(3000);