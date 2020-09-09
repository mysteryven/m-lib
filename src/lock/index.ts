interface LockResult {
  unlock: (result?: any) => void;
  runner: () => Promise<any>;
}

export default function lock(): LockResult {
  let it: null | Generator = null;

  return {
    unlock(result) {
      it && it.next(result)
    },
    runner() {
      return new Promise((resolve, reject) => {
        it = sleeper(resolve)
        it.next();
      })
    }
  }

  function* sleeper(resolve: (result: any) => any) {
    const result: any = yield;
    resolve(result);
  }
}

