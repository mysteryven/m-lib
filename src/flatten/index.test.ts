import flatten from "./index";

describe('flatten', () => {
  it('should run without error', function () {
    const obj = {}
    const test = () => {
      flatten([]);
    }

    expect(test).not.toThrow();
  });

  it('should flatten only 1 level by default', function () {
    const origin = [1, 2, [3, [4]]];    
    const res1 = [1, 2, 3, [4]];

    const res = flatten(origin);
    console.log(res);
    
    expect(res).toEqual(res1)
  })

  it('should flatten specific level correct', function () {
    const origin = [1, 2, [3, [4, [5]]]];
    const res1 = [1, 2, 3, 4, [5]];

    const res = flatten(origin, 2);
    console.log(res);

    expect(res).toEqual(res1)
  })

  it('should flatten Infinity level correct', function () {
    const origin = [1, 2, [3, [4, [5]]]];
    const res1 = [1, 2, 3, 4, 5];
    const res = flatten(origin, Infinity);

    expect(res).toEqual(res1)
  })
});
