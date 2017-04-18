describe("Test binary search", function() {
  it("test [1,2,3,4,5], 1", function() {
    expect(binarySearch([1,2,3,4,5], 1)).toBe(0);
  });
  it("test [1,2,3,4,5], 2", function() {
    expect(binarySearch([1,2,3,4,5], 2)).toBe(1);
  });
  it("test [1,2,3,4,5], 3", function() {
    expect(binarySearch([1,2,3,4,5], 3)).toBe(2);
  });
  it("test [1,2,3,4,5], 4", function() {
    expect(binarySearch([1,2,3,4,5], 4)).toBe(3);
  });
  it("test [1,2,3,4,5], 5", function() {
    expect(binarySearch([1,2,3,4,5], 5)).toBe(4);
  });
  it("test [1,2,3,4,5], 6", function() {
    expect(binarySearch([1,2,3,4,5], 6)).toBe(-1);
  });
  it("test [1,2,3,4,5], -1", function() {
    expect(binarySearch([1,2,3,4,5], -1)).toBe(-1);
  });
  it("test [1,2,3,4,7], 5", function() {
    expect(binarySearch([1,2,3,4,7], 5)).toBe(-1);
  });
  it("test [1,3,3,4,5], 2", function() {
    expect(binarySearch([1,3,3,4,5], 2)).toBe(-1);
  });



  it("test [1,2,3,4], 1", function() {
    expect(binarySearch([1,2,3,4], 1)).toBe(0);
  });
  it("test [1,2,3,4], 2", function() {
    expect(binarySearch([1,2,3,4], 2)).toBe(1);
  });
  it("test [1,2,3,4], 3", function() {
    expect(binarySearch([1,2,3,4], 3)).toBe(2);
  });
  it("test [1,2,3,4], 4", function() {
    expect(binarySearch([1,2,3,4], 4)).toBe(3);
  });
  it("test [1,2,3,4], 6", function() {
    expect(binarySearch([1,2,3,4], 6)).toBe(-1);
  });
  it("test [1,2,3,4], -1", function() {
    expect(binarySearch([1,2,3,4], -1)).toBe(-1);
  });
  it("test [1,2,3,4,7,8], 5", function() {
    expect(binarySearch([1,2,3,4,7,8], 5)).toBe(-1);
  });
  it("test [1,3,3,4,5,9], 2", function() {
    expect(binarySearch([1,3,3,4,5,9], 2)).toBe(-1);
  });
});
