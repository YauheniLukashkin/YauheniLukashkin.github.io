//isArray function
function isArrayPrototype(param) {
  return Object.prototype.toString.call(param) === '[object Array]';
}

function isArrayInsanceof(param) {
  return param instanceof Array;
}

function isArrayConstructor(param) {
  return Boolean(param) && param.constructor === Array; //
}

function testIsArray(func) {
  var a = [1,2,3]
  var b = 3;
  var c = { name: "name" };
  var d = [];
  var str = "sdfsfd";
  console.log("test iaArray:");
  console.log(func(a));
  console.log(func(d));
  console.log(func(b));
  console.log(func(c));
  console.log(func(str));
}

//range function
function range(a, b, c) {
  var arr = [];
  if (arguments.length == 3) {
    var trueParam = false;
    if ((a < b && 0 < c) || (a > b && 0 > c)) {
      trueParam = true;
    }
    while (Math.abs(a) < Math.abs(b) && trueParam) {
      arr.push(a);
      a+=c;
    }
  } else if (arguments.length == 2) {
    for (var i = a; i < b; i++) {
      arr.push(i);
    }
  } else if (arguments.length == 1) {
    for (var i = 0; i < a; i++) {
      arr.push(i);
    }
  }
  return arr;
}

function testRange() {
  console.log("test range:");
  console.log(range(9, 10, 2));
  console.log(range(1, 10, -2));
  console.log(range(1, -10, -2));
  console.log(range(1, 10, 2));
  console.log(range(10, 10, 2));
  console.log(range(11, 10, 2));
  console.log(range(-1, 10, 22));

  console.log(range(1, 5));
  console.log(range(5, 1));
  console.log(range(1, 1));

  console.log(range(5));
  console.log(range(0));
  console.log(range(-5));
}

//compact function
function compactFor(arr) {
  if (arr instanceof Array) {
    var reaArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (Boolean(arr[i])) {
        reaArr.push(arr[i]);
      }
    }
    return reaArr;
  }
}

function compactFilter(arr) {
  if (arr instanceof Array) {
    return arr.filter(
      function(number) {
        return Boolean(number);
      }
    );
  }
}

function testCompact(func) {
  console.log("test compact:");
  console.log(func([true, false, true]));
  console.log(func([1, 2, 0]));
  console.log(func([]));
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
  if (arr instanceof Array) {
    return arr.reduce(
      function(sum, current) {
        return sum + current;
      }, 0);
  }
}

function testSum(func) {
  console.log("test compact:");
  console.log(func([true, false, true]));
  console.log(func([1, 2, 0]));
  console.log(func([]));
}

//unique function
function uniqueFor(arr) {
  if (arr instanceof Array) {
    var arrRes = [];
    var isUnique;
    for (var i = 0; i < arr.length; i++) {
      isUnique = true;
      for (var j = 0; j < arrRes.length; j++) {
        if (arr[i] == arrRes[j]) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        arrRes.push(arr[i]);
      }
    }
    return arrRes;
  }
}

function uniqueFilter(arr) {
  if (arr instanceof Array) {
    return arr.filter(
      function (number, i, arr) {
        return arr.slice(i+1, arr.length).indexOf(number) == -1;
      });
  }
}

function testUnique(func) {
  console.log("test unique:");
  console.log(func([true, false, true, false]));
  console.log(func([1, 2, 0, 1, 1, 2]));
  console.log(func([]));
}

//last function
function lastLen(arr) {
  if (arr instanceof Array) {
    return arr[arr.length-1];
  }
}

function testLast(func) {
  console.log("test last:");
  console.log(func([true, false, true, false]));
  console.log(func(["s1", "2", "sd3", "wer4", "66", "sdf7"]));
  console.log(func([]));
}

//last execute function
function lastExecuteLastLen(arr, count) {
  if (arr instanceof Array) {
    if (arguments.length == 2 && arr.length - count > 0) {
      arr.length = arr.length-count;
    }  else if (arguments.length == 1 && arr.length > 0) {
      arr.length = arr.length-1;
    }
  }
  return arr;
}

function lastExecuteLastSplit(arr, count) {
  if (arr instanceof Array) {
    if (count > 0) {
      arr.splice(-count);
    } else {
      arr.pop();
    }
  }
  return arr;
}

function testExecute(func) {
  console.log("test execute:");
  console.log(func([true, false, true, false], 1));
  console.log(func(["s1", "2", "sd3", "wer4", "66", "sdf7"], 2));
  console.log(func([]), 3);
  console.log(func([2]), 3);
  console.log(func([2, 4]));
}

function runTask() {
  testIsArray(isArrayInsanceof);
  testIsArray(isArrayPrototype);
  testIsArray(isArrayConstructor);
  testRange();
  testCompact(compactFilter);
  testCompact(compactFor);
  testSum(sumFor);
  testSum(sumReduce);
  testUnique(uniqueFor);
  testUnique(uniqueFilter);
  testLast(lastLen);
  testExecute(lastExecuteLastLen);
  testExecute(lastExecuteLastSplit);
}

runTask()
