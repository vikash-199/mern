//['ate','eat','cat','atc']

const groupAna = (arr) => {
  let map = {};
  for (let ele of arr) {
    let sorted = ele.split('').sort().join('');

    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(ele);
  }
  return Object.entries(map).map((ele) => ele[1]);
};

/*
const obj = {
  a: 1,
  b: 2,
  c: 3
};
🔹 1. Object.values()

👉 Returns only values

Object.values(obj);

✅ Output:

[1, 2, 3]

2. Object.entries()

👉 Returns key + value pairs (as array)

Object.entries(obj);

✅ Output:

[ ['a', 1], ['b', 2], ['c', 3] ]


🔹 Object.keys()

👉 Returns only keys of the object

✅ Example
const obj = {
  a: 1,
  b: 2,
  c: 3
};
Object.keys(obj);

👉 Output:

['a', 'b', 'c']

*/
