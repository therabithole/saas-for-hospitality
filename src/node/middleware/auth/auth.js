const jwt = require('jsonwebtoken');
const config = require('config')

function hotelierAuth (req, res, next) {
  
  
  const token = req.header("x-auth-token")
   if(!token) return res.status(401).send("Process Denied , no AUTH Token provided")
  try {
    const decodedPayload = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decodedPayload;
    next();
      
  } 
  catch (ex) {
      res.status(400).send('Invalid Auth Token');
  }
    
}

module.exports = hotelierAuth  