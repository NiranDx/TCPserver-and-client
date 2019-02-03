var net = require( 'net' );
var HOST = '127.0.0.1' ;
var PORT = 6969 ;
var client = new net .Socket();
var i = 0;
var num = [1,2,3,4,5]
client .connect( PORT , HOST , function () {
console . log ( 'CONNECTED TO: ' + HOST + ':' + PORT );
client . write ( '5935512021' );
});
client.on('data', function(data) {
		console.log('data: ' + data)
		if(data =='BINGO'){
			//console.log(""+data)
 			client.destroy();
 		}

		if (data =='OK') {
 			client.write(''+num[i]);
 		}
 		if (data == 'WRONG') {
 			client.write(''+num[i]);
 			i++;
 		}
 		if (i == 4) {
 			client.destroy();
 		}

 		
});
// Add a 'close' event handler for the client socket
client .on( 'close' , function () {
console . log ( 'Connection closed' );
});