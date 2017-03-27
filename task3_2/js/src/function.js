//isArray function
function isArrayPrototype(param) {
  return Object.prototype.toString.call(param) === '[object Array]';
}

function isArrayInsanceof(param) {
  return param instanceof Array;
}

function isArrayConstructor(param) {
  return param && param.constructor === Array; //
}

//range function
function range(left, right, step = 1) {
  var resultArr = [];
  var trueParam = true;
  if (arguments.length >= 3) {
    if (!((left < right && 0 < step) || (left > right && 0 > step))) {
      trueParam = false;
    }
  } else if (arguments.length == 1) {
    right = left;
    left = 0;
  }
  if (trueParam) {
    for (var i = left; i < right; i+=step) {
      resultArr.push(i);
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
    function(sum, current) {
      return sum + current;
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
    return arr[arr.length-1];
  }
}

//last execute function
function lastExecuteLen(arr, count = 1) {
  var resultArr = arr;
  if (arr instanceof Array) {
    if (arr.length > count) {
      resultArr.length = arr.length-count;
    }
  }
  return resultArr;
}

function lastExecuteSplit(arr, count = 1) {
  var resultArr = arr;
  if (arr instanceof Array) {
    if (arr.length > count) {
      resultArr.splice(-count);
    }
  }
  return resultArr;
}
