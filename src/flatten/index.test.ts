import flatten from "./index";

describe('flatten', () => {
  xit('should run without error', function () {
    const obj = {}
    const test = () => {
      flatten([]);
    }

    expect(test).not.toThrow();
  });

  xit('should flatten with specific level', function () {
    const origin = [1, 2, [2, [4, 4]]];    
    const res1 = [1, 2, 2, 4, 4];

    const res = flatten(origin, 2);
    
    expect(res).toEqual(res1)

  })
});
