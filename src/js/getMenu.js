import data from '../menu.json';
import template from '../template.hbs';

import refs from './refs';
const { menuList } = refs;

let result = template(data);
menuList.insertAdjacentHTML('beforeend', result);
