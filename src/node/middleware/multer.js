let multer = require('multer');
let uploadHack = multer.diskStorage({ destination: function (req, file, cb) {
    cb(null, "/tmp/new-uploads")
},
    filename: function( req, file, cb) {
        const uniqueSuffix = 
        Date.now() + "-" + 
        Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + "-" + uniqueSuffix) 
    }})

let storage = multer({storage: uploadHack});

module.exports = uploadHack;
