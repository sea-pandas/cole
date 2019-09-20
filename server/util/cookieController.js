//requre the db
const cookieController = {};

cookieController.setCookie = (req,res, next) => {
  res.cookie('cookieName', 'cookieValue', {expire: new Date() + 900000, httpOnly: true})
}

cookieController.checkCookie = (req, res, next) => {
  const id = ...
  const query = 
}

module.exports = cookieController;
