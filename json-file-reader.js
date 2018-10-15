function fileReader(filename, callback){ //
	var fs = require('fs');// fs module from node
    fs.readFile(filename, 'utf-8', function(err, data){ // returned value passed to 'data' parameter
    	// readFile job is to read file, after reading will have content, this content is the returned value
    	if(err){

        console.log("Error");

    		throw err;

    	}
    	var parseData = JSON.parse(data); //parseData = array of objects
    	callback(parseData);


    })

}
module.exports.fileReader = fileReader; //defining modules for use in appcountry.js
