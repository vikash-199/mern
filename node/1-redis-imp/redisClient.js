import redis from 'redis';

//create client
const client = redis.createClient();

client.on('error', (err) => {
  console.log('Redis error:', err);
});

//connect function
export const connectRedis = async () => {
  await client.connect();
  console.log('Redis connect.');
};

export default client;
