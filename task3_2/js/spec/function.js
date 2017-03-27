describe("Test isArray", function() {
  it("test [1,2,3]", function() {
    var testVal = [1,2,3]
    expect(isArrayPrototype(testVal)).toBe(true);
    expect(isArrayInsanceof(testVal)).toBe(true);
    expect(isArrayConstructor(testVal)).toBe(true);
  });
  it("test 3", function() {
    var testVal = 3;
    expect(isArrayPrototype(testVal)).toBe(false);
    expect(isArrayInsanceof(testVal)).toBe(false);
    expect(isArrayConstructor(testVal)).toBe(false);
  });
  it("test { name: 'name' }", function() {
    var testVal = { name: "name" };
    expect(isArrayPrototype(testVal)).toBe(false);
    expect(isArrayInsanceof(testVal)).toBe(false);
    expect(isArrayConstructor(testVal)).toBe(false);
  });
  it("test []", function() {
    var testVal= [];
    expect(isArrayPrototype(testVal)).toBe(true);
    expect(isArrayInsanceof(testVal)).toBe(true);
    expect(isArrayConstructor(testVal)).toBe(true);
  });
  it("test 'sdfsfd'", function() {
    var testVal = "sdfsfd";
    expect(isArrayPrototype(testVal)).toBe(false);
    expect(isArrayInsanceof(testVal)).toBe(false);
    expect(isArrayConstructor(testVal)).toBe(false);
  });
});

describe("Test range", function() {
  it("test 9, 10, 2", function() {
    expect(range(9, 10, 2)).toEqual([9]);
  });
  it("test 1, 10, -2", function() {
    expect(range(1, 10, -2)).toEqual([]);
  });
  it("test 1, 10, 2", function() {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });
  it("test 11, 10, 2", function() {
    expect(range(11, 10, 2)).toEqual([]);
  });
  it("test -1, 10, 22", function() {
    expect(range(-1, 10, 22)).toEqual([-1]);
  });
  it("test 1, 5", function() {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });
  it("test 5, 1", function() {
    expect(range(5, 1)).toEqual([]);
  });
  it("test 1, 1", function() {
    expect(range(1, 1)).toEqual([]);
  });
  it("test 10, 1", function() {
    expect(range(10, 1)).toEqual([]);
  });
  it("test -10, -1", function() {
    expect(range(-10, -6)).toEqual([-10, -9, -8, -7]);
  });
  it("test 5", function() {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });
  it("test 0", function() {
    expect(range(0)).toEqual([]);
  });
});

describe("Test compact", function() {
  it("test [true, false, true]", function() {
    expect(compactFor([true, false, true])).toEqual([true, true]);
    expect(compactFilter([true, false, true])).toEqual([true, true]);
  });
  it("test [1, 2, 0]", function() {
    expect(compactFor([1, 2, 0])).toEqual([1, 2]);
    expect(compactFilter([1, 2, 0])).toEqual([1, 2]);
  });
  it("test []", function() {
    expect(compactFor([])).toEqual([]);
    expect(compactFilter([])).toEqual([]);
  });
});

describe("Test sum", function() {
  it("test [true, false, true]", function() {
    expect(sumFor([true, false, true])).toEqual(2);
    expect(sumReduce([true, false, true])).toEqual(2);
  });
  it("test [1, 2, 0]", function() {
    expect(sumFor([1, 2, 0])).toEqual(3);
    expect(sumReduce([1, 2, 0])).toEqual(3);
  });
  it("test []", function() {
    expect(sumFor([])).toEqual(0);
    expect(sumReduce([])).toEqual(0);
  });
});

describe("Test unique", function() {
  it("test [true, false, true, false]", function() {
    expect(uniqueFor([true, false, true, false])).toEqual([true, false]);
    expect(uniqueFilter([true, false, true, false])).toEqual([true, false]);
  });
  it("test [1, 2, 0, 1, 1, 2]", function() {
    expect(uniqueFor([1, 2, 0, 1, 1, 2])).toEqual([1, 2, 0]);
    expect(uniqueFilter([1, 2, 0, 1, 1, 2])).toEqual([0, 1, 2]);
  });
  it("test []", function() {
    expect(uniqueFor([])).toEqual([]);
    expect(uniqueFilter([])).toEqual([]);
  });
});

describe("Test last", function() {
  it("test [true, false, true, false]", function() {
    expect(lastLen([true, false, true, false])).toBe(false);
  });
  it("test ['s1', '2', 'sd3', 'wer4', '66', 'sdf7']", function() {
    expect(lastLen(["s1", "2", "sd3", "wer4", "66", "sdf7"])).toEqual("sdf7");
  });
  it("test []", function() {
    expect(lastLen([])).toBe();
  });
});

describe("Test execute", function() {
  it("test [true, false, true, false], 1", function() {
    expect(lastExecuteLen([true, false, true, false], 1)).toEqual([true, false, true]);
    expect(lastExecuteSplit([true, false, true, false], 1)).toEqual([true, false, true]);
  });
  it("test ['s1', '2', 'sd3', 'wer4', '66', 'sdf7'], 2", function() {
    expect(lastExecuteLen(["s1", "2", "sd3", "wer4", "66", "sdf7"], 2)).toEqual(["s1", "2", "sd3", "wer4"]);
    expect(lastExecuteSplit(["s1", "2", "sd3", "wer4", "66", "sdf7"], 2)).toEqual(["s1", "2", "sd3", "wer4"]);
  });
  it("test [], 3", function() {
    expect(lastExecuteLen([], 3)).toEqual([]);
    expect(lastExecuteSplit([], 3)).toEqual([]);
  });
  it("test [2], 3", function() {
    expect(lastExecuteLen([2], 3)).toEqual([2]);
    expect(lastExecuteSplit([2], 3)).toEqual([2]);
  });
  it("test [2, 4], ", function() {
    expect(lastExecuteLen([2, 4])).toEqual([2]);
    expect(lastExecuteSplit([2, 4])).toEqual([2]);
  });
});
