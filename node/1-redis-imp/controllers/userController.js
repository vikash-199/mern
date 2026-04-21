import axios from 'axios';
import client from '../redisClient.js';
import { use } from 'react';

export const getUser = async (req, res) => {
  const userId = req.params.id;

  try {
    //check cache
    const cacheData = await client.get(userId);

    if (cacheData) {
      console.log('Serving from redis cache.');
      return res.json(JSON.parse(cacheData));
    }

    //if not in cache fetch from api
    console.log('Fetch from api...');
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const data = response.data;

    // 3. Store in Redis (TTL = 60 sec)
    await client.setEx(userId, 60, JSON.stringify(data));
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
