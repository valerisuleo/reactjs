# Advanced Topics

In this section...

- High Order Components
- Hooks
- Context


## High Order Components

> To reuse logic across components

Imagine we have 3 components and in all these components we want to have some *tootip* behaviour: so when we *mouseover* on a component we should see it and disappear on *mouseout* .

> How we are gonna implement this?

In our component we need some kind of 

- `state` like a `boolean` flag. 
- Next we should handle the mouse event and reset the boolean value.
- Also we need to render *conditionally* out tooltip based on the boolean value.

Now we have to repeat the same logic in each component and here's the **probem**: if ther's a bug or we want to chanhe some logic we have to change every single component...we use *HOC* to solve this problem!

> How *HOC* works?

![Imgur](https://www.dropbox.com/s/4emazb1inhrht4l/hoc.png?raw=1)

### Implementing HOC

1. `touch movie.jsx && touch withTooltip.jsx`

2. `In movie.jsx`

    ```
    import React, { Component } from 'react';

    class Movie extends Component {
        render() {
            return (
                <div>
                    Movie
                </div>
            );
        }
    }

    export default Movie;
    ```

3. In `withTooltip.jsx` we are gonna create a fn that should takes an existing component as argument. In this function we should return a new component that wraps the original component.

    ```
    import React from "react";

    function withTooltip(Component) {
        return class WithTooltip extends React.Component {
            render() {
                return (
                    <div>
                        <Component />
                    </div>
                );
            }
        };
    }
    export default withTooltip;
    ```

4. Back to `movie.jsx` we pass the Movie component as argument for our wrapper.

    ```
    import React, { Component } from 'react';
    import withTooltip from './withTooltip'
    class Movie extends Component {
        render() {
            return (
                <div>
                    Movie
                </div>
            );
        }
    }

    // export default Movie;
    export default withTooltip(Movie);
    ```

> There is a tiny issue with the current implementation

If we try to pass a new prop to from `App.js` to `Movie.jsx` we wont to be able to see that:

```
function App() {
  return (
    <Movie id='newProp'></Movie>
  );
}
```

This is happening because `Movie` component is wrapped inside `withTooltip`, to fix it we can use `{...this.props}`.

```
function withTooltip(Component) {
    return class WithTooltip extends React.Component {

        render() {
            return (
                <div
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                >
                    <Component {...this.props} showTooltip={this.state.showTooltip} />
                </div>
            );
        }
    };
}
```

## Hooks

**Before**: *Functional* component are `Stateless` and *Class* component are `Stateful`
**Now**: Since React 16.8 we got a new feature called *Hooks* that allow us to build functional components with all the fatures we have in *Class* component, we can use *state* and *lifecycles*.


### Why Hooks?

- Classes are a bit difficult to understand
- The `this` keyboard is confusing in JS
- Boilerplate code


### What's a hook?

*Hook is a `fn` that allows us to hook into React features like working with state or lifecycle methods*

```
function CounterHook(props) {

    return(
        <p>Counter:</p>
    )
}

export default CounterHook;
```

In order to use hooks we need to import them

```
import React, { useState } from 'react';

function CounterHook(props) {
```

> Everything that starts with *use* is a hook.


```
function CounterHook(props) {
    const [count, setCount] = useState(0);
```

Here we call `useState` and we give to our counter an initial value of `0` and this wil return an `array` with 2 elements:

1. the first element is the value of our counter: 
	
	```
	const array = useState(0);
	const count = array[0]; // this.state.count
	```

2. the second item is a `fn` to updating this value:

	```
	const setCount = array[1]; // this.setState()
	```
	
###### Refactoring

`const [count, setCount] = useState(0);`

All together:

```
import React, { Component, useState, Fragment } from 'react';

function CounterHook(props) {
    const [count, setCount] = useState(0);

    return(
        <Fragment>
            <h1>CounterHook</h1>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count+1)}>Increase</button>
        </Fragment>
    )
}

export default CounterHook;
```



Let's go to `counter.jsx` to finally render our counter

```
import React, { Component } from 'react';
import CounterHook from './counterHooks';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterHook></CounterHook>
            </div>
        );
    }
}

export default Counter;
```


#### Multiple state variables

We can also declare multiple state variables. For example let's add an `input`


```
<Fragment>
    <h1>CounterHook</h1>
    <div>Count: {count}</div>
    <button
        className="btn btn-secondary btn-sm m-5"
        onClick={() => setCount(count + 1)}
    >
        Increase
    </button>
    <input
        className="form-control"
        type="text"
    />
</Fragment>
```

we need to handle the change:

```
<input
	className="form-control"
	type="text"
	onChange={e => e.target.value}
/>
```

We assign to the input field an `''` as initial value 
`const [inputName, setName] = useState('');`
Now we should call the `setName` to hookup the view with the controller and pass as argument `e.target.value`

```
<input
	className="form-control"
	type="text"
	onChange={e => setName(e.target.value)}
/>
```

> We cannot call hooks inside loops, condtions or nested functions!

```
This won't work!!!

function CounterHook(props) {
    const [count, setCount] = useState(0);
    
    if (count === 0) {
        const [inputName, setName] = useState("");
    }
```

## Context

If you've been developing react for a while you are probablu you came a cross a problem called *prop drilling*

Let's say we have a tree component like this:

![Imgur](https://www.dropbox.com/s/o7kwwcodj8unhi0/drilling.png?raw=1)

In order to share data between the first and the third componet we need to pass the `props` also to the second.

![Imgur](https://www.dropbox.com/s/mol7h71wmarddgy/drilling%20two.png?raw=1)

Few years ago, before we have *context* a library called _**Redux**_ came to solve this issue. 

![Imgur](https://www.dropbox.com/s/sx24r7isldwil11/redux.png?raw=1)

With Redux ww don'have to drill properties at every level. Instead we have a concept called *store* which is an obj that stores the global state of our app.

![Imgur](https://www.dropbox.com/s/wpawo981rjsbmcd/redux2.png?raw=1)

Here we can store the `currentUser` obj and we can pull it out in this component over here.

> Basically every component can get data from the store. That's the idead behind **Redux**.

With **Context** we can pass data down our component tree without *prop drilling*. In the first component we are gonna provide some context or some share data and in the third component we are gonna consume that context. So when we use this feature we are dealing with *providers* and *consumer*.


### Context in Class Components

- `touch moviePage.jsx && touch movieList.jsx`: on the moviePage we are gonna invoke the movieList.

	```
	import React, { Component } from 'react';
	import MovieList from './movieList';
	
	class MoviePage extends Component {
	    render() {
	        return (
	            <div>
	                <MovieList></MovieList>
	            </div>
	        );
	    }
	}
	
	export default MoviePage;
	```
	
	
	```
	import React, { Component } from 'react';
	
	class MovieList extends Component {
	    render() {
	        return (
	            <div>
	                MovieList         
	            </div>
	        );
	    }
	}
	
	export default MovieList;
	```

- Go to `App.js` for the purpose of this example we are gonna comment out our `<Router>` and we simply invoke the `MoviePage`. Also we define some state ` currentUser: { name: 'Mike' }` 

	```
	import React, { Component } from 'react';
	import './App.css';
	import Navbar from './components/navbar';
	import { Switch, Route } from 'react-router-dom';
	import Movie from './components/hoc/movie'
	import RegularCounter from './components/regularCounter'
	import Counter from './components/hook/counter';
	import MoviePage from './components/context/moviePage'
	import UserContext from './components/context/userContext'
	
	class App extends Component {
	
	    state = {
	        currentUser: { name: 'Mike' }
	    }
	    
	    render() {
	        return (
	            <MoviePage></MoviePage>
	        );
	    }
	    // render() {
	    //     return (
	    //         <div>
	    //             <Navbar></Navbar>
	    //             <div className="container">
	    //                 <Switch>
	    //                     <Route path="/context" component={MoviePage}></Route>
	    //                     <Route path="/counterhook" component={Counter}></Route>
	    //                     <Route path="/counteregular" component={RegularCounter}></Route>
	    //                     <Route path="/hoc" component={Movie}></Route>
	    //                     <Route path="/" component={Movie}></Route>
	    //                 </Switch>
	    //             </div>
	    //         </div>
	    //     );
	    // }
	}
	
	export default App;
	```
	
> How can we pass this obj  `currentUser: { name: 'Mike' }` down the component tree?

**1)** We must creare a **context obj** so `touch userContext.jsx`:

```
import React from 'react';
	
const UserContext = React.createContext();
	
export default UserContext
```
	
	This return a context obj; by convention we shuold name this obj **capitalizing** the first letter of every word `const UserContext = React.createContext();` 

**2)** Now we need to provide this context obj in a top component. In this case go back to `App.js`:


```
import UserContext from './components/context/userContext'
	
class App extends Component {
    
    render() {
        return (
            <UserContext.Provider value={this.state.currentUser}>
                <MoviePage></MoviePage>
            </UserContext.Provider>
        );
    }
```
	
Now this `UserContext.Provider` component has a special property `value` and this is wehre we are gonna pass an obj down our components tree.

**3)** Now we can consume the `UserContext`. Back to `movieList/jsx`

```
class MovieList extends Component {
    render() {
        return (
            <UserContext.Consumer>{(userContext) => <div>MovieList:</div>}</UserContext.Consumer>
        );
    }
}
```

**4)** In `userContext.jsx`

```
import React from 'react';

const UserContext = React.createContext();

UserContext.displayName = 'UserContext';

export default UserContext;
```

**5)** Finally...

```
import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {(userContext) => <div>MovieList: {userContext.name}</div>}
            </UserContext.Consumer>
        );
    }
}

export default MovieList;
```
	
So this is how we use a *context* api:

1. **Create** a context obj
2. Then we **provide** it
3. Finally we **consume** it 


> What if we wanna consume this context obj outside of the `render()` ?

- We need to set a static property: `MovieList.contextType = UserContext;`

	> A **static** **property** is a property that belongs to to a `Class`, not to an obj.
	
-  Now we can `log` our obj

```
class MovieList extends Component {
    componentDidMount() {
        console.log('contxt', this.context); // return our currentUser obj.
        
    }
    
    render() {
        return (
            <UserContext.Consumer>
                {(value) => <div>MovieList: {value.name}</div>}
            </UserContext.Consumer>
        );
    }
}

MovieList.contextType = UserContext;
```

> Alternative synthatx...

```
class MovieList extends Component {

    static contextType = UserContext;
    
    componentDidMount() {
        console.log('contxt', this.context);
        
    }
    
    render() {
        return (
            <UserContext.Consumer>
                {(value) => <div>MovieList: {value.name}</div>}
            </UserContext.Consumer>
        );
    }
}

export default MovieList;
```

### Context in Functional Components

```
import React from 'react';

function MovieRow(props) {
    return (
        <div>
            
        </div>
    );
}

export default MovieRow;
```

- Now to use the `userContext` inside this component first we need to `import UserContext from './userContext';`.

- We also have a *special hook* called `useContext` and we beed to `import React, {useContext} from 'react';`

> This hook `useContext` only works with functional components!

```
import React, {useContext} from 'react';
import UserContext from './userContext';

function MovieRow(props) {

    const currentUser = useContext(UserContext);
    console.log('currentUser', currentUser);
    
    return (
        <div>
            {currentUser.name}
        </div>
    );
}

export default MovieRow;
```

We call `useContext()` and we pass `UserContext` as argument. This return an obj which represents our current user *Mike*. 


Back to `MoviePage.jsx` to test if it works...

```
class MoviePage extends Component {
    render() {
        return (
            <div>
                {/* <MovieList></MovieList> */}
                <MovieRow></MovieRow>
            </div>
        );
    }
}
```


![Imgur](https://www.dropbox.com/s/47wjxd3vppkcrkh/context.png?raw=1)


### Updating the Context

So far we have assumed that our user is logged in. 

- Now we are gonna change this behaviour and simulate the scenario where the user is not logged in. 
- Then we are gonna build a `login` component with a `btn`. 
- When we press the `btn` the user should login. 
- we should see the `username` on the view. 

> How can we update the context?

Back to `App.js` in 
 
- `<UserContext.Provider value={this.state.currentUser}>` 
- we are providing this obj `value={this.state.currentUser}` 
- which is part of `state = {currentUser: { name: 'Mike' } }`

> Forget about the `context` for a second. How can we update the state of the componente higher and the component tree?

Because we have a `state` we should also provide methods for updating the state:
```
    // add method take username as arg. let's say is what the user typed in the form
    handleLogin = (credentials) => {
        // now we shoud call the server and get the informations about this user. 
        // We simulate that by using a console.log()
        console.log('credentials', credentials);
        // Let's imagine we get a user obj from the server...
        const {username} = credentials;
        // const user = { name: username };
        this.setState({ currentUser: username });
        
    }
```

Now that we got a method to update the `state` we should pass this method just like the `currentUser` using the `context` obj.

- <s>`<UserContext.Provider value={this.state.currentUser}>`</s>
- `<UserContext.Provider value={{ currentUser: this.state.currentUser, onLoggedin: this.handleLogin }}>`

Because we have changed the structure of the obj we are passing down, we should modify the child component as well. Back to `movieList`:

**Before**...

```
 <UserContext.Consumer>
    {(value) => <div>MovieList: {value.name}</div>}
</UserContext.Consumer>
```

**Now** In order to acces now to the `name` property we have to:

```
<UserContext.Consumer>
	{(value) => <div>MovieList: {value.currentUser.name}</div>}
</UserContext.Consumer>
```

> `value.currentUser` might be `null` so we need to check before!

```
<UserContext.Consumer>
    {(value) => (
        <div>
            MovieList:{" "}
            {value.currentUser ? value.currentUser.name : ""}
        </div>
    )}
</UserContext.Consumer>
```

Same story for `MovieRow.jsx`

```
import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
    const currentUser = useContext(UserContext);
    console.log("currentUser", currentUser);

    const { name } = currentUser.currentUser;

    return <div>{name ? name : ""}</div>;
}

export default MovieRow;
```


> So far the app still works but we haven't updated anything yet but just changed the structure of the context obj.

#### To Update the context...

- `touch login.jsx`


```
import React, { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
    const currentUser = useContext(UserContext);

    return (
        <div>
            <button onClick={() => currentUser.onLoggedin({ username: 'Mike'})}>Login</button>
        </div>
    );
}

export default Login;
```

> **to recap...**
> 
> - we added `handleLogin` method to `App.component`
> - we pass this method down using *context* obj `onLoggedin: this.handleLogin`; now every component can call this method.

























































































