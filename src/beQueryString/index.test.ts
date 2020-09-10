import beQueryString from "./index";

describe('beQueryString', () => {
  it('should run without error', function () {
    const obj = {}
    const test = () => {
      beQueryString(obj)
    }
    
    expect(test).not.toThrow();
  });
  it('should return correct string', function () {
    const obj = {a: 1, b: 2};
    const res = beQueryString(obj);
    expect(res).toBe("?a=1&b=2");
  });
  it('should support custom prefix', function () {
    const obj = {a: 1, b: 2};
    const prefix = '--'
    const res = beQueryString(obj, prefix);
    expect(res).toBe(prefix + "a=1&b=2");
  });
});
