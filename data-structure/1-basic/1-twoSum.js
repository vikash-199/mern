const res = (arr, target) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let need = target - arr[i];
    if (map[need] !== undefined) {
      return [map[need], i];
    }
    map[arr[i]] = i;
  }
};

console.log(res([1, 2, 3, 4, 5], 9));
