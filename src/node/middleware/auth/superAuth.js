const jwt = require('jsonwebtoken');
const config = require('config')

function superAuth (req, res, next) {
  
  
  const token = req.header("x-super-auth-token")
   if(!token) return res.status(401).send("Process Denied , no Super Admin Auth Token provided")
  try {
    // const decodedPayload = jwt.verify(token, config.get('jwtPrivateKey'));
    // req.user = decodedPayload;
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
     req.user = decoded;
    next();
      
  } 
  catch (ex) {
      res.status(400).send('Invalid superAdmin Token');
  }
    
}

module.exports = superAuth  