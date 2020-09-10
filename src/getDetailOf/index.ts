type E = {
  target: {
    dataset: {
      [key: string]: any
    }
  }
};

export default function getDataSet(e: E): object {
  return e.target.dataset;
}
