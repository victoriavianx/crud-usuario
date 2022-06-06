import users from "../database";

const verifyUserIsAdm = (req, res, next) => {
  const userIsAdm = users.find((user) => user.isAdm === true);

  if (!userIsAdm) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  return next();
};

export default verifyUserIsAdm;
