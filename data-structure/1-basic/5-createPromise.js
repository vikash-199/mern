//first way to create a promise

const getUser = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

getUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

getUsers()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
