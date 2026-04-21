import redisClient from '../config/redis.js';

export const getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    // 1. Check in Redis cache
    const cachedUser = await redisClient.get(`user:${id}`);

    if (cachedUser) {
      return res.status(200).json({
        source: 'cache',
        data: JSON.parse(cachedUser),
      });
    }

    // 2. Fetch from API / DB
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();

    if (!user || user.id === undefined) {
      return res.status(404).json({ message: 'User not found' });
    }

    // 3. Store in Redis (with expiry)
    await redisClient.setEx(`user:${id}`, 60, JSON.stringify(user)); // 60 sec TTL

    // 4. Send response
    res.status(200).json({
      source: 'api',
      data: user,
    });

  } catch (error) {
    next(error);
  }
};