import users from "../database";

const verifyUserAdmStatus = (req, res, next) => {
  const id = req.params.uuid;
  const userId = req.user.uuid;
  const isAdm = req.user.isAdm;

  if (userId !== id && isAdm === true) {
    next();
  } else if (userId === id && isAdm === false) {
    next();
  } else {
    return res.status(401).json({
      message: "Missing admin permissions",
    });
  }

  next();
};

export default verifyUserAdmStatus;
