# Routing

In this section...

- Route Params
- Query String
- Redirect
- Not Found (404) Pages
- Nested Routing



## Adding Routing

Unlike framework like Angular, in React we don't have the concept of routing because **React is a simple lightweight library and not a complete framework**, it's only respensible for rendering the view, nothing more.

> How can we add routing to our app?

1. `npm i react-router-dom --save`

2. Back to `/index.js` we need to import `BrowserRouter`: this component wraps the history obj in browsers. Anywhere in our component tree we'll be able to use the history obj.
	
	```
	import { BrowserRouter } from 'react-router-dom';
	
	ReactDOM.render(<BrowserRouter>
	<App />
	</BrowserRouter>, document.getElementById('root'));
	registerServiceWorker();
	```

3. Register our route: we need to tell react what component should be render given a specific url.

	```
	class App extends Component {
	    render() {
	        return (
	        <div>
	            <NavBar />
	            <div className="content">
	                <Route path="/products" component={ Products }></Route>
	                <Route path="/posts" component={ Posts }></Route>
	                <Route path="/admin" component={ Dashboard }></Route>
	                <Route path="/" component={ Home }></Route>
	            </div>
	        </div>
	        );
	    }
	}
	```
	
## Switch

![Imgur](https://www.dropbox.com/s/hakjzr28v64c3dh/switch.png?raw=1)

So currently when we click on a link i.e. *product* we can see rendering both product an home

> Why?

This is happening because they both share `/` so home will be always rendered.

> How can we fix it?

We can use:

- *Exact*: `<Route path="/" exact component={ Home }></Route>`
- *Switch*:

```
class App extends Component {
    render() {
        return (
        <div>
            <NavBar />
            <div className="content">
                <Switch>
                    <Route path="/products" component={ Products }></Route>
                    <Route path="/posts" component={ Posts }></Route>
                    <Route path="/admin" component={ Dashboard }></Route>
                    <Route path="/" component={ Home }></Route>
                </Switch>
            </div>
        </div>
        );
    }
}
```

## Link

There's a problem: when we click on a link currently it will reload every time the `bundle.js` file which is basically all our javascript code. This is a *SPA* so we want to update only what is stricly necessary.

> How can we fix it?

By replacing the `<a>`...

```
import React from "react";

const NavBar = () => {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/products">Products</a>
      </li>
      <li>
        <a href="/posts/2018/06">Posts</a>
      </li>
      <li>
        <a href="/admin">Admin</a>
      </li>
    </ul>
  );
};

export default NavBar;
``` 

...with `<Link>`

```
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
```


## Route Props

If we inspect the liks we can see that **we can get for free** the following `props`

![Imgur](https://www.dropbox.com/s/kj1tp68q3ybzq7s/route%20props.png?raw=1)

- **history**: to work with the history obj in the browser and with that we can send the user to a different page;
- **location**: represent where the app is now;
- **match**: contains information about how this url matched the path that we set in our route;


## Passing Props

> How can we set additional props when we are using Route?

<s>`<Route path="/products" component={ Products }></Route>`</s>

```
<Route path="/products" render={(props) => <Products text="Hello, " {...props} />} ></Route>
```

Now if we go to `/products` and `console.log(this.props);` we should see the our 3 regular props + `text="Hello`;


## State Params

> How can we retrive route params?

- Let's make a route for the *show* page: `<Route path="/products/:id" component={ ProductDetails }></Route>`

- To `get` the state params insiede the *show* component we simply do: `this.props.match.params.id`


## Optional Params

By default params `<Route path="/posts/:year/:month" component={ Posts }></Route>` are **required** 

> How can me make them optional?

`<Route path="/posts/:year?/:month?" component={ Posts }></Route>`


#### Query String Params

Generally speaking when we deal with *optional params* instead of including then in a a route we should include theme in *query string*

As we know query string is what we append in the url using `?`:

`http://localhost:3000/posts/2018/06?sortBy=newest&approved=true`

> How can we read this params in a Rect app?

1. `npm i query-string --save`

2. Back to `/posts` component: 

```
import queryString from "query-string";

const Posts = props => {
    const { match, location } = props;

    console.log(queryString.parse(location.search));
``` 

It will return: `{approved: "true", sortBy: "newest"}`


## Redirects - 404

If the `url` doen't exist we want to redirect the user to `/not-found` page.

> How can we do that?

We can use `Redirect`:

```
<Route path="/not-found" component={ NotFound }></Route>
<Route path="/" exact component={ Home }></Route>

<Redirect to="/not-found"></Redirect>
```

We can also use redirect as `featureToggle`:

```
<Redirect from="/messages" to="/posts"></Redirect>
```

Basically when a user try to reach this endpoint `/messages` he will be redirected to `/posts`

## Programmatic Navigation

Let's say that `onSave` we wanto to redirect the user to the products list `/products`.

> How can we do that?

```
class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.push('/products');
};
```

With `push` if the user goes back by clicking on the back btn on the browser he will be take to the previous page.

> What if we don't want allow that?
> A classic example is the `login` page. We don't want the user go back there if is already logged.

We can use `replace`:

```
class ProductDetails extends Component {
  handleSave = () => {
    this.props.history.replace('/products');
  };
```

## Nested Routing

A classic example is a *sub/side navbar*.

First let's create our `sideBar` component

```
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <ul>
            <li>
                <Link to="/admin/posts">posts</Link>
            </li>

            <li>
                <Link to="/admin/users">users</Link>
            </li>
        </ul>
    );
};

export default SideBar;
```

Back to `/dashboard.jsx` let's import `SideBar` and add couple of routes:

```
import SideBar from "./sideBar";
import { Route } from "react-router-dom";

const Dashboard = (props) => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <SideBar />
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/posts" component={Posts} />
        </div>
    );
};

```

> As we can see now, we don't have to use `Router` component only in `App.js` so we can use it anywhere. 
> 
> What metters is if the current url match this path (`path='/admin/users'`) then we are gonna render this component `component={ Users }`.


























