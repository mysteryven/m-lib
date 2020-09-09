import mock = jest.mock;
import lock from "./index";

describe('lock', () => {
  it('should run without errors', function () {
    const fn = lock;
    try {
      fn();
    } catch (e) {}
    finally {
      expect(fn).not.toThrow();
    }
  });
  it('should be unlocked with unlock call', async (done) => {
    const random = "I am a random string";
    const {unlock, runner} = lock();

    setTimeout(() => {
      unlock(random);
    }, 1000)

    const res = await runner();
    expect(res).toBe(random);

    done();
  });
  it('should always be waiting before unlock call', async (done) => {
    let i = 1;
    const {unlock, runner} = lock();

    setTimeout(() => {
      expect(i).toBe(1);
    }, 1000)

    setTimeout(() => {
      i = 10;
      unlock();
    }, 3000)

    await runner();
    expect(i).toBe(10);
    done();
  });
});
