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
