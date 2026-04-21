// import redis from 'redis';

// //create client
// const client = redis.createClient();

// client.on('error', (err) => {
//   console.log('Redis error:', err);
// });

// //connect function
// export const connectRedis = async () => {
//   await client.connect();
//   console.log('Redis connect.');
// };

// export default client;

import redis from 'redis';

const client = redis.createClient();

client.on('error', (err) => {
  console.log('Redis error', err);
});

export const connectRedis = async () => {
  try {
    await client.connect();
    console.log('Resis connected');
  } catch (err) {
    console.log(err);
  }
};

export default client;
