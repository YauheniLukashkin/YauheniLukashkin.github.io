function binarySearch (initArr, value) {
  let res = -1;
  if (initArr instanceof Array && initArr.length > 0) {
    let bs = function rec(left, right, mid) {
      if (initArr[mid] == value) {
        return mid;
      } else if (left == right || mid == right || mid == left) {
        return -1;
      } else if (initArr[mid] < value) {
        return rec(mid, right, Math.ceil((right + mid) / 2))
      } else if (initArr[mid] > value) {
        return rec(left, mid,  Math.floor(mid / 2))
      }
    }
    res = bs(0, initArr.length - 1, Math.round((initArr.length - 1) / 2));
  }
  return res;
}
