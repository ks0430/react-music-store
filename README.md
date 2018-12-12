# React Master

Thank Mosh.

## JS - Basic

### Object

How to define an object and use property from an object:

```
const person = {
  name: 'Mosh',
  walk() {},
}

const targetMember = 'name';
person[targetMember.value] = 'John';

```

### Object destructuring

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

### This

- react: default strict mode
- this: call way

### Arrow function & this

- callback function in object, this will refer to window object in strict mode unless use arrow function.
- arrow function inherite this.

### Spread - copy object & array

- for array & object
- clone array & object
- insert dynamic value

```
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
const combined2 = [...first, "a", ...second, "b"];
```

### Zen code - auto create code snippets

`table.table>thead>tr>td*4` and click `tab`.

### Mounting face in react

| Func                                     | Usage                                                               |
| ---------------------------------------- | ------------------------------------------------------------------- |
| `constructor()`                          | Declare properties. this.setState() can not be used in constructor. |
| `componentDidMount()`                    | After rendered, most time initialized data from remote              |
| `componentWillUnmount()`                 | when the element is deleted from react virtual tree                 |
| `componentDidUpdate(prevState,curState)` | rendered recursively                                                |

simple complenent haven't life circle hook.
because no extends from component.

### import - autopromotion

Rely on dependencies in package json.

## lodash

### Installtion

**lodash:**
lodash is a famous js library that gives a bunch of easy use js functions.
To use lodash, first install lodash package.

```
npm install lodash
```

second import lodash function.

### Import lodash

```
import _ from 'lodash'
```

It is also called underscore.

### \_.range()

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

### lodash container & chain func

```
_(items).slice(startIndex).take(pageSize).value()
```

Pack items to lodash container, and this will give array prototype functions, the way to use chain function.

### slice() & take()

```
_(items).slice(startIndex).take(pageSize).value()
```

At last return value() will create the new array.

Like substring, take part array. [2,3,4,5]

## Movie Demo

### Composing

- Movie
  - ListGroup
  - MovieTable
    - TableHeader (Common)
  - Pagination

### Skills

**1 - Initialized State**

If the property change it's value by events, then put it in **state**. Initialized it in the `coponentDidMount()` life hook.

```
// Index.js - Movie

componentDidMount() {
  const genres = [{ name: "ALL GENRES", _id: "" }, ...getGenres()];
  this.setState({
    movies: getMovies(),
    genres
  });
}
```

**2 - Do not use setState() in render()**

`setState()` will change the state and call render() method, and then render() call setState()... It will cause loop infinitive.

**3 - Immutable: copy object & array**

Use spread `...` character to copy array & object. It is noteworthy that property in object is refer to the original property.
If two objects refer to one, change each of them will reflect to the other. So use {...} to keep both separatly.

```
const counters = [...this.state.counters];
const index = counters.indexOf(counter);
counters[index] = { ...counter }; //  refer to a new object
counters[index].value++;
```

**4 - filter**

`Array.prototype.filter()` will returns the objects meet the demands.

```
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```

**5 - alias in destructor**

```
const {length: count} = this.state.movies // length is the property of movies, extends from array
```

**6 - conditional null && conditial key**

When determine a key is null or valued, use nested key to ensure it's not null.

```
const filtered =
    selectedGenre && selectedGenre._id
      ? allMovies.filter(m => selectedGenre._id === m.genre._id)
      : allMovies;
```

Conditional keys, if `column.path` is null then use `column.key`

```
<th
  key={column.path || column.key}
  onClick={() => this.raiseSort(column.path)}
>
  {column.label}
</th>
```

Or pass key to child and use brackets. Pass valueProperty to child and this will return null, but will not cause error.

```
<li
  key={item[valueProperty]}
  style={{ cursor: "pointer" }}
  className={
    selectedItem === item ? "list-group-item active" : "list-group-item"
  }
  onClick={() => onItemSelect(item)}
  >
    {item[textProperty]}
</li>
```

**7 - oderBy**

From lodash library.

```
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

// Sort by `user` in ascending order and by `age` in descending order.
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```

**8 - Format & Clean Code**

- Passing functions: `onDelete()`
- Declare functions: `handleDelete()`

**9 - TypeCheck**

- Install `prop-type`

This will check the prop pass from parents is in right way.

```
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
```

**10 - multiediting: select skills**

Hotkey: `command + d` once for the word, twice or more for mutiSelected.

```
<th></th>
<th></th>
<th></th>

//if want change the first <th>, select <th
```

**11 - Understanding of passing func**

To enable a func can receive variables from other components, and change that variable in other components, instead of passing all required parametres from parents to child.

**12 - Math.ceil()**

`Math.ceil()` : get the ceiling number of a float variable.

**13 - Lodash: get()**

This can't work.

```
<td >{item["genre.name"]}</td>
```

Use `_.get()` will get the nested property in object without error.

```
_.get(item, column.path); // This will return item.genre.name and without undefined error
```

**14 - modified key with two more parametres**
This will dertermine the key in which row and whick column, if the name of column is not exsit, then use another one.

```
createKey = (item, column) => {
  return item._id + (column.path + column.key);
};
```

**15 - zen coding js vs reactjs**

```
Route[path][component] * 4
```

This only support in react javascript, change language to reactjs.

## Router

### Install react router

```
npm i react-router-dom
```

### Basic

**Wrap content in `<BrowserRouter>`**

```
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

This will record all history and pass to children.

**Use Route component**

```
<Switch>
  <Route path="/products" component={Products} />
  <Route path="/posts" component={Posts} />
  <Route path="/" component={Home} />
</Switch>
```

- `<Switch>` will choose only one route, order from most specific one to most general one.
- `exact` property will not match other route.

**Use link - prevent full reload**

- `<a>` tag will reload the full page and reload all js & css assets
- `<Link>` tag will only update the components that you need.

```
<div>
  <Link to="/products">Products</Link>
  <Link to="/posts">Posts</Link>
  <Link to="/">Home</Link>
</div>
```

How Link works?
Link warp an `<a>` element, and prevent it from default achieving, just refresh the url and load new component.

**Route injection**
`<Route>` component will inject `history`, `location` and `match` props to components. It can be view in chrome react dev.

**Route pass props**

Props contains `history` `location` and `match`, use spread syntax to pass separatly.

```
<Route
  path="/products"
  component={props => <Nav title="Products" {...props} />}
/>
```

**URL parameters**

```
<Switch>
  <Route path="/products/:id" component={ProductDetails} />
  <Route path="/products" component={Products} />
  <Route path="/posts/:year/:month" component={Posts} />
  <Route path="/" component={Home} />
</Switch>
```

`:parameter` will inject parameter from url to props, it will appear in `match.params`

**Optional parameters**

```
 <Route path="/posts/:year?/:month?" component={Posts} />
```

This syntax is from regular expression.

**Query string: extract url options**

Options in url - query string

```
http://localhost:3000/posts/22/33?sortBy=newest&approved=true
```

React extract it in location property, but stored only in string.

```
search:"?options=target"
```

install a package: `query-string`

```
npm i query-string@6.1.0
```

**Redirect**

If no page found, use `Redirect` on the bottom of the route component.

```
 <Redirect to="/not-found" />
```

Redirect one page to another.

```
  <Redirect from="/messages" to="posts" />
```

**CLick to another page**

`push`: have history, next page
`replace`: no history, change current page directly

## Hotkeys

### React

| Hotkey          | Description                              |
| --------------- | ---------------------------------------- |
| `imr` + `tab`   | import React from 'react'                |
| `imrc` + `tab`  | import React, { Component } from 'react' |
| `redux` + `tab` | import { connect } from 'react-redux'    |

#### Stateless component

`rfc` + `tab`

```
import React from 'react'

export default function $1() {
  return <div>$0</div>
}
```

`rfce` + `tab`

```
import React from 'react'

function $1() {
  return <div>$0</div>
}

export default $1
```

`rafc` + `tab`

```
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1
```

`rafce` + `tab`

```
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default \$1
```

## Dependencies & Settings

### Basic

| Name  | Package Name | Description          |
| ----- | ------------ | -------------------- |
| React | react        | react origin package |
| Babel | babel        | babel origin package |

### Front-end

| Name         | Package Name       | Description                             |
| ------------ | ------------------ | --------------------------------------- |
| Sass         | `node-sass`        | sass compiler                           |
| React Router | `react-router-dom` | react router package                    |
| Redux        | `redux`            | redux origin package                    |
| Redux Thunk  | `redux-thunk`      | asynchronous redux action creator       |
| Query String | `query-string`     | extract options from url to json object |

### Back-end

## Plugins - VSCode

| Name | Description |
| ---- | ----------- |

