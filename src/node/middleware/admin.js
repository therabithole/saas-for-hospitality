function admin (req, res, next) {
    
    // 401 Unauthorisaed
    // 403 Forbidden 
   if(!req.user.isAdmin) return res.status(403).send("Access Deniend - You are not an Admin")
   
    next()
}

module.exports = admin