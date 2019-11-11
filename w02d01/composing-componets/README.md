# Composing Component

## Passing data to components



We want to pass the value of our objects in the `counters array` in the `/counters.jsx`

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

Let's add a `value` **attribute**

```
<div>
	{this.state.counters.map(item => <Counter key={item.id}></Counter>)}
</div>
```

Like this:

```
<div>
	{this.state.counters.map(item => <Counter key={item.id} value={item.value} selected={true}></Counter>)}
</div>
```

Back to `/counter.jsx` we add in below the `render()` a `console.log('props', this.props);`

>Every react component has property calls `props` which is basically a plain javascript obj that includes all the attributes we set in `counter.jsx`

.

>**What's the differece beetween state and props?**

`State `il local to our component while `props ` is accessible from outside.

>**N.B.** `props` is read only. 

Now instead of

```
class Counter extends Component {
  state = {
    count: 0,
  };
```

we can do:

```
class Counter extends Component {
  state = {
    count: this.props.value,
  };
```

Now in the browser we can see that the counter has been initialized to `4`

## Raising and Handling Events

This is pretty much like `Eventemitter` in Angular.

What we wanna do is delete one of counters which is inside the `/counters.jsx`. 

To do that we create a delete button in our `counter.jsx` component.

`<button onClick={counterDelete} className="btn btn-danger btn-sm m-2">Delete Btn</button>`

However as we are already aware the `state` of a component **is not accessible form outside.**

>How can we fix this?

1. First we write the **delete method** inside the `/counter.jsx`

	```
	  counterDelete = () => {
	    console.log('From counter with love!');
	  }
	```

2. Back to `/conters.jsx` we are gonna use the `props` to attach a `fn`

	```
	<div>
		{this.state.counters.map(item => 
		<Counter key={item.id} value={item.value} selected={true} id={item.id} onDelete={this.counterDelete}></Counter>)}
	</div>
	```

3. Finally back to `/conter.jsx` we do `<button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete Btn</button>`

## Updating The State







