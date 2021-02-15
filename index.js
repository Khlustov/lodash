const lodash = require('lodash');

const data1 = [
    {
      "age": 3,
      "name": "Curtis Greene",
      "email": "curtis.greene@zaj.ca",
    },
    {
      "age": 23,
      "name": "Nikki Lowe",
      "email": "nikki.lowe@darwinium.tv",
    },
    {
      "age": 39,
      "name": "Barr Copeland",
      "email": "barr.copeland@nipaz.me",
    },
  ];

const data2 = [
    {
      "age": 29,
      "name": "Calhoun Woodward",
      "email": "calhoun.woodward@medmex.info",
    },
    {
      "age": 21,
      "name": "Leta Lee",
      "email": "leta.lee@qnekt.com",
    },
    {
      "age": 40,
      "name": "James Dinh",
      "email": "j.dink@erw.com",
    }
  ];


// Task 1
// Нужно найти и сохранить в переменную индекс пользователя в массиве data1, у которого возраст равен 23 года.

const index = lodash.findLastIndex(data1, function(o) {return o.age == 23});


// Task 2
// Объединить два массива data1 и data2 в один и записать этот результат в новую переменную
const newArray = lodash.concat(data1, data2);


// Task 3
// Взять любой объект из любого массива и на его основе создать новый объект, но выкинув из него поле “age”.
const a = {
    "age": 40,
    "name": "James Dinh",
    "email": "j.dink@erw.com",
  }

const result = lodash.omit(a, 'age');


// Task 4
// Выполнить задачу 3 без библиотек, а только средствами JS ( Иммутабельно, не используя delete )
const {age, ...newObject} = a;
console.log(newObject);

   




  