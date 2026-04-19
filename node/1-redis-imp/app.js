const express = require('express');
const axios = require('axios');
const redis = require('redis');

const app = express();
app.use(express.json());

// 🔌 Redis Client
const client = redis.createClient();

client.on('error', (err) => {
  console.log('Redis Error:', err);
});

// Connect Redis
(async () => {
  await client.connect();
  console.log('✅ Redis Connected');
})();

// 🚀 API with Redis Caching
app.get('/user/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    // 1. Check cache
    const cachedData = await client.get(`user:${userId}`);

    if (cachedData) {
      console.log('⚡ From Redis Cache');
      return res.json(JSON.parse(cachedData));
    }

    // 2. Fetch from API
    console.log('🌐 Fetching from API...');
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    const data = response.data;

    // 3. Store in Redis (TTL = 60 sec)
    await client.setEx(`user:${userId}`, 60, JSON.stringify(data));

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// 🟢 Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
