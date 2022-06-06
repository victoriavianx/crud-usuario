import users from "../database";

const verifyUserAdm = (req, res, next) => {
  const isAdm = req.user.isAdm;

  if (isAdm === true) {
    return true;
  }

  if (isAdm === false) {
    return false;
  }

  return next();
};

export default verifyUserAdm;
