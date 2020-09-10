interface PrimaryTypeObject {
  [key: string]: string | number | boolean | bigint
}

export default function beQueryString(obj: PrimaryTypeObject, prefix: string = '?'): string {
  return Object.keys(obj).reduce((prev, cur, index) => {
    let connector = '';
    if (index !== 0) {
      connector = '&';
    }
    return `${prev}${connector}${cur}=${obj[cur]}`;
  }, prefix)
}
