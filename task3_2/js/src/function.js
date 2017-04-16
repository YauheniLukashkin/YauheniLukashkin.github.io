//isArray function
function isArrayPrototype(param) {
  return Object.prototype.toString.call(param) === '[object Array]';
}

function isArrayInsanceof(param) {
  return param instanceof Array;
}

function isArrayConstructor(param) {
  return param && param.constructor === Array;
}

//range function
function range(left, right, step = 1) {
  var resultArr = [];
  var start = 0;
  var end = left;
  if (right || right == 0) {
    start = left;
    end = right;
  }
  var lenArr = 0;
  if (end > start && 0 < step) {
    lenArr = (end - start) / step;
  } else if (end < start && 0 > step) {
    lenArr = (start - end) / step;
  }
  if (lenArr) {
    var j = 1;
    resultArr[0] = start;
    while (j < Math.abs(lenArr)) {
      resultArr[j] = resultArr[j - 1] + step;
      j++;
    }
  }
  return resultArr;
}

//compact function
function compactFor(arr) {
  if (arr instanceof Array) {
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        resultArr.push(arr[i]);
      }
    }
    return resultArr;
  }
}

function compactFilter(arr) {
  if (arr instanceof Array) {
    return arr.filter(
      function(element) {
        return element;
      }
    );
  }
}

//sum function
function sumFor(arr) {
  if (arr instanceof Array) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
}

function sumReduce(arr) {
  return arr.reduce(
    function(previous, next) {
      return previous + next;
    }, 0);
}

//unique function
function uniqueFor(arr) {
  var resultArr = [];
  var isUnique;
  for (var i = 0; i < arr.length; i++) {
    isUnique = true;
    for (var j = 0; j < resultArr.length; j++) {
      if (arr[i] == resultArr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

function uniqueFilter(arr) {
  if (arr instanceof Array) {
    return arr.filter(
      function (element, i, arr) {
        return arr.slice(i + 1, arr.length).indexOf(element) == -1;
      });
  }
}

//last function
function lastLen(arr) {
  if (arr instanceof Array) {
    return arr[arr.length - 1];
  }
}

//last execute function
function lastExecuteLen(arr, count = 1) {
  var resultArr = [];
  if (arr instanceof Array) {
    resultArr = arr.slice();
    if (resultArr.length > count) {
      resultArr.length -= count;
    }
  }
  return resultArr;
}

function lastExecuteSplit(arr, count = 1) {
  var resultArr = [];
  if (arr instanceof Array) {
    resultArr = arr.slice();
    if (arr.length > count) {
      resultArr.splice(-count);
    }
  }
  return resultArr;
}
