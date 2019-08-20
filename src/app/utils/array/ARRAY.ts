export class ARRAY {
  static toArray(obj: any) {
    const ids = Object.keys(obj);
    return ids.map(function (id) {
      return {
        id,
        label: this.obj[id]
      }
    }, {obj})
  }
 static sortBy(ar: any[], key: string) {
    ar.sort(function (a, b) {
      return a[key] > b[key] ? 1 : -1;
    });
    return ar;
  }
  static indexBy(ar: any[], key: string) {
    const out = {};
    ar.forEach(function (item) {
      this.out[item[this.key]] = item;
    }, {out, key});
    return out;
  }
}
