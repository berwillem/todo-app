// In-memory request logs (you can switch to Redis for a more scalable solution)
const userRequestLogs = {};

// Sliding Log Rate Limiter Middleware
const rateLimitWindowMs = 60 * 1000; // 1 minute window
const requestLimit = 100; // Limit of 5 requests per window

exports.rateLimiter = (req, res, next) => {
  const ip = req.ip; // Use IP as user identifier (can also be user ID if users are authenticated)
  const currentTime = Date.now();

  // Initialize request log if not present
  if (!userRequestLogs[ip]) {
    userRequestLogs[ip] = [];
  }

  // Filter logs to remove requests outside of the time window
  const requestLog = userRequestLogs[ip].filter(
    (timestamp) => currentTime - timestamp < rateLimitWindowMs
  );

  // Push the current request timestamp
  requestLog.push(currentTime);
  userRequestLogs[ip] = requestLog;

  // Check if request limit is exceeded
  if (requestLog.length > requestLimit) {
    return res
      .status(429)
      .json({ message: "Too many requests, please try again later." });
  }

  // Allow the request if limit is not exceeded
  next();
};
