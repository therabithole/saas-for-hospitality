const config = require('config');

module.exports = function () {
    if(!config.get('jwtPrivateKey')) {
        
        //throw new Error("Enviornment Variable FATAL ERROR: jwtPrivateKey Not Defined")
        // Make it better and log the error in db thats' why use new method above
//        console.log('Fatal error: Enviornment Variable_ jwt key not Defined')
    //  process.exit(1)
      console.log("skipping")
        }
      
}