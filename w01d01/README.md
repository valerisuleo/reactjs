# Components


## Install Bootstrap

1. `npm i bootstrap --save`
2. Back to `src/index.js` 
3. we need to impport: `import 'bootstrap/dist/css/bootstrap.css';`

## Your First React Component
1. `mkdir components && touch counter.jsx/componets`
2. Back to `src/components/counter.jsx`:

	```
	import React, { Component } from 'react';
	
	class Counter extends Component {
	  render() {
	    return <h1>Hello World</h1>;
	  }
	}
	
	export default Counter;
	```
3. Back to `/index.js` here we need to import our component `import Counter from './components/counter.jsx';`
4. we pass the component as argument instead of the `<App />` like this: `ReactDOM.render(<Counter />, document.getElementById('root'));`
5. Back in the browser let's check the result!

## Specifing Children
Let's add now a `<button>` to our component:

```
import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return <h1>Hello World</h1><button>Increment Btn</button>
  }
}

export default Counter;
```

> Now we get a compilation error. Why?

Thing is React doesn't know which element has to render first. In order to fix this we need to wrap everything inside a `div` inside `()`. Like this:

```
import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button>Increment Btn</button>
      </div>);
  }
}

export default Counter;
```

Also if we wanna **get rid of the extra `divs`** we can to that:

```
import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment Btn</button>
      </React.Fragment>
    );
  }
}

export default Counter;
```

## Embedding Expression
What we wanna do now is display a value dyanamically.

Let's add `state` which is a special property, basically it's an obj. that contains any data that this components needs.

```
  state = {
    count: 4
  };
```

So our code looks like: 

```
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 5,
    string: 'Assolo'
  };

  render() {
    return (
      <div>
        <span>{ this.formatCount() }</span>
        <button>Increment Btn</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    const { string } = this.state;
    // const count = this.state.count;
    return count === 0 ? 'Zero' : string;
  }
}
```

## Setting Attributes
Now we are gonna learn how to set attributes on this element.

Let's add an `img` tag and an `imgUrl` to our `state` obj.

```
class Counter extends Component {
  state = {
    count: 5,
    string: 'Assolo',
    imgUrl: 'https://picsum.photo/200'
  };

  render() {
    return (
      <div>
        <img src={this.state.imgUrl} alt=""/>
        <span>{ this.formatCount() }</span>
        <button>Increment Btn</button>
      </div>
    );
  }
}
```

So setting attributes is prettu streight forward but setting class and style attributes is a bit tricky:

In React we use `className` instead of `class`:

```
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increment Btn</button>
      </div>
    );
  }
```

So far so good...however if we wanna add some custom css in *jsx* we have 2 options:
 
1. to set the `style` attribute to a **plain js obj**:

	```
	  render() {
	    return (
	      <div>
	        <span style={ this.styles } className="badge badge-primary m-2">{ this.formatCount() }</span>
	        <button className="btn btn-secondary btn-sm">Increment Btn</button>
	      </div>
	    );
	  }
	```

	also we need to create our `styles ` obj:
	

	```
	class Counter extends Component {
	  state = {
	    count: 5,
	    string: 'Assolo',
	  };
	
	
	  styles = {
	    fontSize: 50,
	    fontWeight: 'bold',
	  }
	
	  render() {
	    return (
	      <div>
	        <span style={ this.styles } className="badge badge-primary m-2">{ this.formatCount() }</span>
	        <button className="btn btn-secondary btn-sm">Increment Btn</button>
	      </div>
	    );
	  }
	}
	```
	

2. We can add style directly in line:

	```
	class Counter extends Component {
	  state = {
	    count: 5,
	    string: 'Assolo',
	  };
	
	  render() {
	    return (
	      <div>
	        <span style={{ fontSize: 50 }} className="badge badge-primary m-2">{ this.formatCount() }</span>
	        <button className="btn btn-secondary btn-sm">Increment Btn</button>
	      </div>
	    );
	  }
	```

## Rendering Class Dynamically
What we wanno do here is rendering the color of the counter based on the value of the count property.

```
  render() {

    let classes = 'badge m-2';
    classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';

    return (
      <div>
        <span className={ classes }>{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increment Btn</button>
      </div>
    );
  }
```

```
let classes = 'badge m-2 ';
    classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';
```

>**Code explenation**: what we are doing here is telling to react, based of the output of this condition `(this.state.count === 0) ?` to **add** the class `badge-warning` or `badge-primary to` the class `badge m-2`.
>Long story short this is what's happening behind the curtains: *'badge m-2 '* + *'badge-warning'*. 
>> **NB:** It's very important to keep the space right after the last letter: `'badge m-2 ';` otherwise the output will be `'bage m-2badge-warning'` and WILL NOT WORKS!

Let's do some **refactoring**:

```
  render() {

    return (
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increment Btn</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';
    return classes;
  }
```

## Rendering List

In react we don't have the concept of loops because **jsx is not a template engine**.
> So how can we render a bunch of list item?

To do that we are gonna use the `map` method to remap each item inside an array into a react element.

```
    return (
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increment Btn</button>
        <ul>
          {this.state.tags.map(tag => <li>{tag}</li>)}
        </ul>
      </div>
    );
  }
```

It's working. However in the console we have a compilation error *Warning: Each child in an array or iterator should have a unique "key" prop*

> Why?

It needs a unique identify on each item in order to keep in sync the virtual dom with the original dom. We have to add a `key` attribute:


```
  render() {

    return (
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increment Btn</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }
```

## Conditional Rendering
What we wanto to do is display the item inside the array otherwise if is empry display a string *There is no tag!*

```
class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  render() {

    return (
      <div>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }
}
```

**N.B.** In *Jsx* we don't have `if/else` statement!

> How can we fix this?

```
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>
    // else...
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
  }

  render() {
    return <div>
      { this.state.tags.length === 0 && 'Pls create a tag!'}
      {this.renderTags()}
    </div>;
  }
}
```

>**Code Explenation:** `{ this.state.tags.length === 0 && 'Pls create a tag!'}`. This is pretty much equal to:

```
if (this.state.tags.length === 0) {
  return  'Pls create a tag!';
}
```

## Handling Events
```
class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  render() {

    return (
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment Btn</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }

  handleIncrement() {
    console.log('Ohhh you click me!');
  }
```

> We do not call our function! `<button onClick={this. handleIncrement}>Increment Btn</button>`

If we do:

```
  handleIncrement() {
    console.log('Ohhh you click me!', this);
  }
```

It will return `undefined`.

>Why?

As long as `this` is referenced to a method attached to an obj is fine: `obj.method()`. However if we have a stand alone `fn`, `this` by default return a reference to the `window` obj. But if the *strict* method is enabled `this` will return `undefinded`.

>What is the solution?

We add a `constructor` which is a method that is called when an obj. of the `class Counter` is created.

```
  constructor() {
    super()
    this.handleIncrement.bind(this)
    console.log('this', this);
  }
```

Now `this` is not `undefined` anymore and now we can use the `bind` method which will return a new instance of `handleIncrement()`

>When we click on the btn the `handleIncrement()` is still `undefined`. Why??

We have to hookup our method with the new instance that we just created:

```
  constructor() {
    super()
    // this.handleIncrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    console.log('this', this);
  }
```

### Huge Refactoring!!!

```
  // constructor() {
  //   super()
  //   // this.handleIncrement.bind(this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   console.log('this', this);
  // }

  render() {

    return (
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment Btn</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }
  
    // handleIncrement() {
  //   console.log('Ohhh you click me!', this);
  // }

  handleIncrement = () => {
    console.log('Ohhh you click me!', this);
  }
```

We can simply use an `=>` and we don't need the `constructor` anymore! :)


## Updating The State

Now wa want to update the `count` property when we click here:

```
handleIncrement = () => {
    console.log('Ohhh you click me!', this);
    this.state.count++
  }
```

>It's not working. Why?

If we take a look at the terminal we see a complitation error: _Line 60:  Do not mutate state directly. Use **setState()**_

So what we need is:

```
handleIncrement = () => {
    console.log('Ohhh you click me!', this);
    this.setState({ count: this.state.count + 1 });
  }
```

## Passing Events Arguments

Whenever you need to pass an arg to event handlers simply pass an `=>` here:

```
Before:
<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment Btn</button>

After:
<button onClick={() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment Btn</button>
```

We modify our event handler like this:

```
  handleIncrement = product => {
    console.log(product);
        this.setState({ count: this.state.count + 1 });

  }
```



