require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.cookies.token;

  if (!authHeader) {
    return res.status(403).json({
      success: false,
      message: "Access denied. Unauthorized user.",
    });
  }

  if (!authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      success: true,
      message: "Invalid token format. Format should be 'Bearer <token>'.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log("PAYLOAD",payload);
    req.id = payload.id;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        success: true,
        message: "Session timed out. Please login again.",
      });
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        success: true,
        message: "Invalid token.",
      });
    }

    console.error("JWT Verification Error:", error);
    return res.status(500).json({
      success: true,
      message: "Internal server error.",
    });
  }
};

module.exports = { verifyToken };

// const jwt = require("jsonwebtoken");

// exports.authMiddleware = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token) {
//     return res.status(401).json({ msg: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: "Token is not valid" });
//   }
// };

// exports.authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res
//         .status(403)
//         .json({ msg: "You do not have permission to perform this action" });
//     }
//     next();
//   };
// };
