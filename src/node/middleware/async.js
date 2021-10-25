// Try Catch Block in all route handlers,  Async MiddleWare Func way, Factory function


module.exports = function asyncMiddleWare(handler) {
    return async(req, res, next ) => {
      try {
        await handler(req, res)
      }
      catch(ex) {
        next(ex)
      }
    }
    
  }
