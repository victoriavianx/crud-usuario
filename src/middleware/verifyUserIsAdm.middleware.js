import users from "../database";

const verifyUserIsAdm = (req, res, next) => {
  const userIsAdm = req.user.isAdm;

  if (!userIsAdm) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};

export default verifyUserIsAdm;
