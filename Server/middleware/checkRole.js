export const checkUserRole = (role) => {
  return (req, res, next) => {
    if (
      (req.user && req.user.role === role) ||
      (req.user && req.user.role === 'admin')
    ) {
      // User has the required role, so proceed to the next middleware
      next();
    } else {
      res.status(403).json({ message: 'Access denied' });
    }
  };
};
