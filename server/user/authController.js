//requre the db
const cookieController = {};

cookieController.setCookie = (req,res, next) => {
  res.cookie('cookieName', ... )
}

cookieController.checkCookie = (req, res, next) => {
  const id = ...
  const query = 
}

module.exports = cookieController;
