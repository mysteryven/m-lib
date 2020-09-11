import goQnActivePage from "./index";

describe('lock', () => {
  it('should run without errors', function () {
    const test = () => goQnActivePage();
    expect(test).not.toThrow();
  });
});
