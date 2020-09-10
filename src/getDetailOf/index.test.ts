import mock = jest.mock;
import getDataSet from "./index";

describe('lock', () => {
  it('should run without errors', function () { 
    function test() {
      getDataSet({ target: { dataset: { a: 1 } } })
    }
    expect(test).not.toThrow();
  });
});
