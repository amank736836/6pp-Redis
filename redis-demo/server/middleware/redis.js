import { redis } from "../app.js";

export const getCachedData = (key) => async (req, res, next) => {
  let masterKey = key;
  let id = req.params.id;
  if (id) {
    masterKey = `${key}:${id}`;
  }
  let data = await redis.get(masterKey);
  if (data) {
    console.log("Fetching products from Redis");
    return res.json({
      [masterKey]: JSON.parse(data),
    });
  }
  next();
};

export const rateLimiter =
  ({ key, limit = 5, timer = 40 }) =>
  async (req, res, next) => {
    const { id } = req.params;
    const clientIp =
      req.headers["x-forwarded-for"] ||
      req.ip ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
    const masterKey = id ? `${clientIp}:${key}:${id}` : `${clientIp}:${key}`;

    console.log("Rate Limiter Middleware");
    console.log(masterKey);

    const count = await redis.incr(masterKey, (err, count) => {
      if (err) {
        console.error(err);
      }
      return count;
    });

    if (count === 1) {
      await redis.expire(masterKey, timer);
    } else if (count > limit) {
      const remainingTime = await redis.ttl(masterKey, (err, remainingTime) => {
        if (err) {
          console.error(err);
        }
        return remainingTime;
      });
      return res
        .status(429)
        .send(`Too many requests Please try again in ${remainingTime} seconds`);
    }

    next();
  };
