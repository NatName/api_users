import parse from 'fs';;
import users from '../data/users';
import util  from 'util';
const readFile = util.promisify(parse.readFile);

class data {

  static async getUsers () {
    const data = await readFile('./data/users.json', "binary");
    return data ?
      JSON.parse(data)
      :
      [];

  }
  static async pagination ({sortedBy = 'id', offset = 0, limit = 10}) {
    const startData = offset * limit;
    let users = await this.getUsers();
    users = users.slice(startData, parseInt(startData) + parseInt(limit));

    if(sortedBy)
      users = users.sort(this.dynamicSort(sortedBy));
    return users;
  }
  static dynamicSort(property) {
    const sortOrder = 1;
    return (a,b) => {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }
  static getLength() {
    return this.getUsers().length;
  }
  static async getStatistic () {
  	const data = await readFile('./data/users_statistic.json', "binary");
    return JSON.parse(data);
  }
}

export default data;
