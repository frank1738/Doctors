export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, allow access to the route
  }
  // User is not authenticated, handle it as needed (e.g., redirect to login)
  res.status(404).json({ msg: 'anuthorized' }); // Redirect to the login page or handle it as needed
};
