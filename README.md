# ITGIRLschool_JS_Week_17

## Теоретические вопросы
### 1. Чем отличается класс от объекта? Приведите примеры и того, и другого, отличные от указанных в уроке.
Класс и объект - это два понятия в объектно-ориентированном программировании (ООП), которые имеют свои отличия. Класс - это структура (шаблон или описание), которая определяет, как создавать объекты. В то время как объект - это конкретный экземпляр класса, созданный в соответствии с описанием класса.

Примеры:
1. Пример класса "Человек" и его объектов:
```
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
   sayHello() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  }
}
let person1 = new Person("Иван", 30, "мужской");
let person2 = new Person("Мария", 25, "женский");
```
2. Пример класса "Книга" и его объектов:
```
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
   getAuthor() {
    return this.author;
  }
}
let book1 = new Book("Война и мир", "Лев Толстой", 1869);
let book2 = new Book("Преступление и наказание", "Федор Достоевский", 1866);
```
3. Пример класса "Фрукт" и его объектов:
```
class Fruit {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
   getName() {
    return this.name;
  }
}
let fruit1 = new Fruit("Яблоко", "красный", 2.5);
let fruit2 = new Fruit("Банан", "желтый", 1.5);
```
В каждом примере класс определяет общие характеристики и методы для объектов, которые используют эти классы. Объекты являются конкретными экземплярами классов, которые имеют свои уникальные значения свойств и могут использовать методы класса.

### 2. 2. Приведите примеры объектно-ориентированного подхода в реальной жизни. 
 1. Банковская система, которая использует классы для Клиента (имя, номер счета, баланс), Аккаунта (тип счета, процентная ставка, баланс) и Транзакции (сумма, дата, тип операции).
 2. Система управления больницей, которая использует классы для Пациента (имя, дата рождения, медицинская история), Доктора (имя, специальность) и Назначения (дата и время, пациент, доктор).
 3. Магазин, который использует классы для Клиента (имя, адрес, список заказов), Товара (название, тип, цена) и Заказа (клиент, товары, стоимость).
 4. Фотоальбом, который использует классы для Фотографии (название, дата, место съемки), Альбома (название, дата создания, список фотографий) и Пользователя (имя, адрес электронной почты, список альбомов).
 5. Система резервирования номеров в отеле, которая использует классы для Клиента (имя, номер телефона, адрес), Номера (номер, тип, цена), и Бронирования (клиент, даты, номер).

### 3. Что такое конструктор? Самостоятельно изучите и напишите, какие бывают виды конструкторов
Конструкторы в JavaScript - это функции, которые используются для создания новых объектных экземпляров. Они обычно вызываются с помощью ключевого слова "new" и используются для инициализации свойств и методов объекта.
 В JS есть несколько видов конструкторов:
 1. Функция-конструктор - это обычная функция, вызываемая с ключевым словом "new". Она определяет свойства и методы, которые будут доступны для каждого экземпляра объекта. Пример:
```
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old");
  }
}
 let john = new Person("John", 25);
```
2. Класс - это шаблон для создания объектов, который может содержать свойства и методы. В JS классы были добавлены в ECMAScript 6 и реализуются через функции-конструкторы. Пример:
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
   greet() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old");
  }
}
let john = new Person("John", 25);
 ```
3. Фабричная функция - это функция, которая возвращает новый объект с определенными свойствами и методами при каждом вызове. Пример:
```
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old");
    }
  }
}
let john = createPerson("John", 25);
```
### 4. Что выведет код? Почему именно так?
```
function bike() {
  console.log(this.name)
}

var name = 'ninja'
var obj1 = { name: 'pomidor', bike: bike }
var obj2 = { name: 'site', bike: bike }

bike()
obj1.bike()
obj2.bike()
```

Ответ:
Код выведет:
```
ninja // из bike()
pomidor // из obj1.bike()
site // из obj2.bike()
```
Это происходит потому, что в функции  `bike()`  используется ключевое слово  `this` , которое ссылается на объект, который вызывает функцию. Когда  `bike()`  вызывается напрямую в строке  `bike()` ,  `this`  ссылается на глобальный объект  `window`  (или  `global`  в Node.js), поэтому переменная  `name`  равная 'ninja', определенная в глобальной области видимости, выводится на экран.
 Однако, когда функция  `bike()`  вызывается через метод  `bike`  другого объекта ( `obj1.bike()`  или  `obj2.bike()` ),  `this`  ссылается на соответствующий объект. Таким образом, если  `bike()`  вызывается как метод  `obj1` , то  `this.name`  будет выводить свойство  `name`  объекта  `obj1` , а если вызывается как метод  `obj2` , то  `this.name`  будет выводить свойство  `name`  объекта  `obj2` .

### 5. Чем статические свойства и методы отличаются от нестатических? В каких ситуациях они применяются?
Статические свойства и методы в JavaScript принадлежат самому классу, а не его экземплярам. Они существуют только в контексте класса и доступны без создания экземпляра класса. Нестатические свойства и методы же связаны именно с экземплярами класса.
 Один из главных примеров использования статических свойств и методов - это когда необходимо использовать общую функциональность, которая не привязана к определенному экземпляру класса. Например, если у нас есть класс  `User` , то статический метод может быть использован для получения списка всех пользователей в системе. Этот метод может использоваться без создания экземпляра класса, т.к. он принадлежит самому классу.
```
class User {
  static users = [];
   constructor(name, email) {
    this.name = name;
    this.email = email;
    User.users.push(this);
  }
   static getAllUsers() {
    return User.users;
  }
}
 let user1 = new User('John', 'john@gmail.com');
let user2 = new User('Bob', 'bob@gmail.com');

console.log(User.getAllUsers()); // [User { name: 'John', email: 'john@gmail.com'},
                                  //  User { name: 'Bob', email: 'bob@gmail.com'}]
```
В примере выше мы использовали статический массив  `users` , чтобы отслеживать все созданные экземпляры класса  `User` . Статический метод  `getAllUsers()`  позволяет получить этот массив без необходимости создания экземпляра класса.
 Нестатические свойства и методы могут быть использованы в тех случаях, когда нам нужна функциональность, которая зависит от конкретного экземпляра класса. Например, у класса  `User`  может быть метод, который позволяет отправить email пользователю. Этот метод будет работать только со свойствами конкретного экземпляра класса  `User` , поэтому он должен быть нестатическим.
 ```
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

   sendEmail(msg) {
    console.log(`Sending email '${msg}' to ${this.email}`);
  }
}

 let user1 = new User('John', 'john@gmail.com');
let user2 = new User('Bob', 'bob@gmail.com');

 user1.sendEmail('Hello John!'); // Sending email 'Hello John!' to john@gmail.com
 ```
В примере выше мы использовали нестатический метод  `sendEmail()` , который отправляет email определенному пользователю, используя свойство  `email`  из его экземпляра класса  `User` . Этот метод не будет работать, если вызвать его без создания экземпляра класса.
 В общем, использование статических и нестатических свойств и методов зависит от конкретных потребностей. Если нам нужно использовать функциональность, которая не связана с конкретным экземпляром класса, то статические свойства и методы могут быть полезны. Если же мы используем функциональность, которая зависит от конкретного экземпляра класса, то нестатические свойства и методы будут более подходящим выбором.

### 6. Самостоятельно изучите, что такое геттеры и сеттеры, приведите пример класса с их использованием.
Геттеры позволяют получить значение свойства объекта, а сеттеры — устанавливать новое значение свойства. Их можно использовать для контроля доступа к свойствам объекта и для обеспечения безопасности данных.
Пример класса Person с использованием геттеров и сеттеров:
```
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (age < 0) {
      throw new Error('Age must be a positive integer');
    }
    this._age = age;
  }
}

let person = new Person('Alice', 25);
person.name = 'Bob';
console.log(person.name); // "Bob"
```
В этом примере мы определили класс Person с двумя свойствами: name и age. К свойствам мы добавили геттеры и сеттеры, которые позволяют получать и изменять значения свойств. В методе set age мы добавили проверку на положительность значения свойства, и в случае неположительного значения выбрасываем ошибку.
Далее мы создали объект person с именем "Alice" и возрастом 25 лет, затем вызвали метод set name и установили новое имя "Bob", и наконец вызвали метод get name, чтобы вывести новое имя на экран.

### 7. Что выведет код? Почему именно так?
```
class Person {
  constructor(name) {
    this.name = name
  }
}

const member = new Person("John")
console.log(typeof member)
```
Код выведет "object". 
Это происходит потому, что при создании экземпляра класса Person с помощью ключевого слова "new" создается новый объект, который является экземпляром этого класса. Этот объект имеет тип "object". 
В конструкторе класса мы устанавливаем свойство "name" экземпляра класса, которое также является объектом типа "object". Однако, при выводе значения объекта на консоль мы получим его тип, а не значение свойства "name".

### 8. Что выведет код? Почему именно так?
```
const person = {
  name: "Valera",
  age: 23
}

let city = person.city
city = "Amsterdam"

console.log(person)
```
Код выведет объект person со свойствами "name" и "age", но без свойства "city". 
Это произойдет потому, что при попытке чтения свойства "city" из объекта "person" даст нам значение "undefined", поскольку этого свойства изначально не существует в объекте "person". Далее мы создаем новую переменную "city" и присваиваем ей значение "Amsterdam". Однако, мы не имеем отношения к свойству "city" в объекте "person". 
 Поэтому, при выводе объекта "person" на консоль, он останется без изменений, и не будет иметь свойство "city".