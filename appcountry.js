var file_reader = require("./json-file-reader.js"); //require "json-file-reader" module that I've created in another file

file_reader.fileReader('./countries.json',  function(parseData){ // fileReader content passed onto (parseData) parameter

 	for (var i = 0; i < parseData.length; i++) { // use of a for loop for accessing data in parsed file
 	    if(parseData[i].name === process.argv[2]){ /* if a name from parseData is entered into the command line
    	then (parseData[i]) will be reading elements in array */
	    	console.log(parseData[i].name);
	    	console.log(parseData[i].topLevelDomain);
	    }
	}
});
