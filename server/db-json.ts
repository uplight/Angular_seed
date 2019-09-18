import * as fs from "fs";


export function readJsonFile(path: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, function (err, data) {
      if (err) return reject(err);
      resolve(JSON.parse(data + ''))
    })
  })
}

export function saveJsonFile(path: string, data: any): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data), 'utf8', function (err) {
      if (err) return reject(err);
      resolve(null);
    })
  })
}

export class DbJson {
  static db: any;

  constructor(filepath: string) {
    if(filepath.indexOf('.json') === -1) filepath = filepath + '.json';
    if (DbJson.db) {
      throw new Error('was initialized ')
    }
    readJsonFile(filepath).then(data => {
      DbJson.db = data;
    });

    setTimeout(() => {
      saveJsonFile(filepath, DbJson.db);
    }, 5000)
  }

  async getPersonData(key: string, personId: string, applicationId: string, questionId: string) {
    const keys = [ personId, applicationId, questionId, key ];
    return DbJson.getData(keys);
  }

  async setPersonData(key: string, data: any, personId: string, applicationId: string, questionId: string) {
    const keys = [ personId, applicationId, questionId, key ];
    return DbJson.setData(keys, data);
  }

  static getData(keys: string[]) {
    const source = DbJson.db;
    const root = keys[0];
    if (!source[root]) {
      source[root] = {};
      return null;
    }
    let out: any = source[root];
    keys.forEach(function (key: string) {
      if (!out[key]) out[key] = {};
      out = out[key];
    });
    return out;
  }

  static setData(keys: string[], data: any) {
    const source = DbJson.db;
    const last = keys.slice(0).pop();
    const existing = DbJson.getParent(keys);
    existing[last] = data;
    return existing;
  }

  static getParent(keys: string[]) {
    const last = keys.slice(0).pop();
    return this.getData(keys);
  }

}
