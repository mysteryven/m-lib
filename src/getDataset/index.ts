type E = {
  target: {
    dataset: {
      [key: string]: any
    }
  }
};

export default function getDataSet(e: E, defaultValue: any = undefined): object {
  return new Proxy(e.target.dataset, {
    get(target, prop ) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else {
        return defaultValue
      }
    }
  })
}
