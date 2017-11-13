import { User } from './user';
import * as os from 'os';
import * as crypto from 'crypto';
import * as moment from 'moment';

const user = new User();

interface Person {
  id?: number;
  name: string;
  age: number;
}

var name: string;
var test;
var age = 20;
var isActive: boolean = false;

var person: Person = {
  age: 20,
  // id: 1,
  name: 'Test',
};

var setName = function(name: string): string {
  return 'Test';
};

var getAge = (age: number) => {
  return 20;
};

name = '1';
test = 0;
test = 'A';

user.setName('Express.js');
var userName = user.getName();

console.log(userName);

var md5 = crypto
  .createHash('md5')
  .update('123456')
  .digest('hex');

console.log(md5);

console.log(moment().format('YYYY-MM-DD'));
console.log(moment().format('x'));
