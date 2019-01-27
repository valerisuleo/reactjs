# Getting Started

## 1 - What's React?

Ract is a Javascript library for building user interface with **components**.

In terms of implementation, a component is typically implemented as a JS class that some state and  a render method.

```
class tweet {
  state = {};
  render() {    
  }
}
```

The `state` here is a data that we want to display when the component is rendered, and the render method as you can tell is responsible for eescribin g what the *UI* should look like.
The output of this render mnethod is a react element.

>What's exactly a react element?

A *RE* it's not a read DOM element, it's just a plain JS object.

Here's whats going n behind thr curtains: react a creating a virtual copy og the origina DOM. So when we make some change it's gonna update the original DOM for us. That's why we don't need anymore to attach event handler to the DOM. You simp;y change the stats of your component.

> What's the differnce beetween React and Angular?

While **Angular** is a framework, **React** is a library: it's only takes care of rendering the view, and makingsure the view is in sync with the state. For this very reason react **has a very small API**. So when we we build app with react we need libraies or things like routing, or calling http.

>What's the advantage of this?
We get the opportunity of choosing the library that with prefer, also It won't break from a version to another, like Angular.

## 2 - Setting up the development env.
`npm i -g create-react-app@1.5.2`

## 3 - Your First React App
In the Terminal:

* `create-react-app react-app`

* `npm start`

## 4 - Hello World!
Let's build everything from the scratch:

 First: `touch src/index.js`

1. Now we need to import from the react library:

	```
	import  React from 'react';
	import  ReactDOM  from 'react-dom';
	```

2. Let's create our markup:

	```
	import  React from 'react';
	import  ReactDOM  from 'react-dom';
	
	const element = <h1>Hello World</h1>;
	console.log(element);
	
	ReactDOM.render(element, document.getElementById('root'));
	```
>`ReactDOM.render(element,document.getElementById('root'));` we pass 2 args: the first is obviously our element and the second is where is gonna be rendered in the `src/public/index.html` => `<div id="root"></div>`







