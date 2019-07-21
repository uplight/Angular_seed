export class ARRAY {
  static indexBy(ar: any[], key: string) {
    const out = {};
    ar.forEach(function (item) {
      this.out[item[this.key]] = item;
    }, {out, key});
    return out;
  }
}
