module.exports = async req => {
  const { authorization } = req.headers;
  req.userData = authorization.split(' ')[1];
};
