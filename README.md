# React Master

Thank Mosh.

## Section1 - js basic

### lesson 10 object

```
const person = {
  name: 'Mosh',
  walk() {},
}

const targetMember = 'name';
person[targetMember.value] = 'John';

```

### lesson 11 this

- react: default strict mode
- this: call way

### lesson 12 bind

### lesson 13 arrow function

### lesson 14 arrow function & this

- callback function in object, this will refer to window object in strict mode unless use arrow function.
- arrow function inherite this.

### lesson 15 Array.prototype.map()

\`\` backstick & \${}

### lesson 16 object destructuring

```
const address = {
  street: "",
  city: "",
  country: ""
};

// const street = address.street;
const country = address.country;
const { street } = address;
const { city: ct } = address;
```

### lesson 17 spread

- for array & object
- clone array & object
- insert dynamic value

```
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
const combined2 = [...first, "a", ...second, "b"];
```

### lesson 18 classes

### Inheritance

### Modules

### Zen code

`table.table>thead>tr>td*4`

### Mounting face in react

`constructor()` initialized data. this.setState() can not be used in constructor.
`componentDidMount()`
`componentWillUnmount()` when the element is deleted from react virtual tree.
`componentDidUpdate(prevState,curState)`
rendered recursively.

simple complenent haven't life circle hook.
because not extends from component.

- import from auto name - dependencies in package json.

### Section-5 Pagination Filtering Sorting

`Math.ceil()` : get the ceiling number of a float variable.

**lodash:**
lodash is a famous js library that gives a bunch of easy use js functions.
To use lodash, first install lodash package.

```
npm install lodash
```

second import lodash function.

```
import _ from 'lodash'
```

It is also called underscore.

Some examples:

```
_.range(1, maxValue+1).map( i =>{
  console.log(i);
})

//equals

for(let i = 1, i < maxValue, i++){
  console.log(i);
}
```

\_.range() will return an array that like[1,2,3,4...,maxValue]

```
_(items).slice(startIndex).take(pageSize).value()
```

Fist pack items to lodash container, and this will give array prototype functions, can use chain function.

At last return value() will create the new array.

Like substring, take part array. [2,3,4,5]
