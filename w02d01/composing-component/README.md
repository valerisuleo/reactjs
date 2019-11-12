# Composing Component

#### In this section:

- Pass Data
- Raise and Handle Events
- Multiple Components in sync
- Functional Components
- Lifecycle Hooks

## Passing data to components

First we create another component `counters.jsx` an d in this comp. we wanna rendere a **list** of counters.

Back to `/index.js` instead of `<CounterComponent />` we wanna import `<CountersComponent />`

```
import React, { Component } from 'react';
import CounterComponent from './counter'

class CountersComponent extends Component {
    state = {  }

    render() { 
        return (
            <div>

                <CounterComponent />
                <CounterComponent />
                <CounterComponent />
                <CounterComponent />

            </div>
        )
    }
}
 
export default CountersComponent;
```

Instead of hardcoding let's make an `array of counters`:


```
  state = {
    counters: [
      { id: 1, value:0 },
      { id: 2, value:0 },
      { id: 3, value:0 },
      { id: 4, value:0 },
    ]
  }
```

Just like this:

```
state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map((item => <CounterComponent key={item.id}>{item.id}</CounterComponent>))}
      </div>
    );
  }
}
```

> If we do `{ id: 1, value:7 },` it will still render `0`. **Why?**

Fist let's add the `value` attribute

```
  render() {
    return (
      <div>
        {this.state.counters.map(item => (
          <CounterComponent value={item.value} key={item.id} selected={true}>{item.id}</CounterComponent>
        ))}
      </div>
    );
  }
}
```

Back to `/counter.jsx` we add temporary inside the render method 

```
  render() {
      console.log('props', this.props);     
```

> Every react comp. has a property called `props` _a basic javascript obj which includes all the attributes that we set_ in `CountersComponent

```
{"value":0,"selected":true,"children":1}
{"value":0,"selected":true,"children":2}
{"value":0,"selected":true,"children":3}
See?
{"value":4,"selected":true,"children":4}
```

Back to `/counter/jsx` instead of

```
 state = {
    count: 0,
    message: "Click To Start to count"
  };
```

We are gonna do 

```
  state = {
    count: this.props.value,
    message: "Click To Start to count"
  };
```

Back to  chrome we can see le last item has `value = 4` 

![Imgur](https://www.dropbox.com/s/ug9ha0vkqmepprb/a.png?raw=1)


## Passing Children

We learned that the `attrs` we set in our `CountersComponent`

```
 <CounterComponent value={item.value} key={item.id} selected={true}>
```

can be passed to the `CounterComponent` using the `props` property.

We have anothe property called **`children`** and _we use that when we want to pass something beetween the opening and closing tag of an elment_

If we add a tag:

```
<div>
	{this.state.counters.map(item => (
	<CounterComponent value={item.value} key={item.id} selected={true}>
		<h4>Hey I am children</h4>
	</CounterComponent>
	))}
</div>
```

and we `log` again the `props` property:

```
value: 0, selected: true, children: {…}
```

To access to its children we simply do `{this.props.children}`

and we can do it **dynamically** just like this:

```
<CounterComponent value={item.value} key={item.id} selected={true}>
	<h4>#{item.id}</h4>
</CounterComponent>
```

### Debugging React Apps

