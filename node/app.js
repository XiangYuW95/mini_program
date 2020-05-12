var http = require('http')
var server = http.createServer()
console.log(server);
server.on('request',(req, res) =>{
    console.log('收到请求');
    res.end(JSON.stringify(
        [
        
                {id: 1, name: 'zs', age: 15},
                {id: 2, name: 'ls', age: 16},
                {id: 3, name: 'ww', age: 18},
                {id: 4, name: 'sc', age: 20}
            
            
            ]
    ))
})
server.listen(3000, () => {
    console.log('启动成功');
    
})


// 