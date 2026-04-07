//[1,2,3,4,5,1,2,3,1]

const kfreq = (arr) => {
  let map = {};

  for (let ele of arr) {
    if (map[ele] !== undefined) {
      map[ele]++;
    } else {
      map[ele] = 1;
    }
  }
  //convert object into arr
  let sortedArray = Object.entries(map).sort((a, b) => b[1] - a[1]); //[['a':3],..]

  return sortedArray.slice(0, k).map((ele) => Number(ele[0]));
};
