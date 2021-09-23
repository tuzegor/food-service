console.log('это полный капец');
import data from '../menu.json';
import template from '../template.hbs';

import refs from './refs';
const { menuList } = refs;

console.log(data);
console.log(template);

let result = template(data);
menuList.insertAdjacentHTML('beforeend', result);
