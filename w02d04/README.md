# Forms

In this section...

- Form
- Validation
- Login Form
- Register Form
- Search Filter


##Building Bootstrap Form

```
// loginForm.jsx

<div className="form-group">
    <label htmlFor="username"username>Username</label>
    <input
        id="username"
        type="email"
        className="form-control"
        placeholder="Enter email"
    />
</div>
```

## Handling Form Submission

```
// loginForm.jsx

class LoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()

        console.log('handleSubmit', e);
        
    }

    render() {
        return (
	        <form onSubmit={this.handleSubmit}>
	            <div className="form-group">
```


## Refs

In React **we should never work directly with the DOM's elements** somethig like this is a big "no no".

<s>`const username = document.getElementById('username').value;`</s>

> **How can we access to the DOM ?**

1. We makea reference

	```
	class LoginForm extends Component {
	
	    username = React.createRef();
	```

2. We add a `red` attr.

	```
	<input
	ref={ this.username }
	id="username"
	type="email"
	...
	```

3. Now we can finally access to our element:

	```
	 handleSubmit = (e) => {
	        e.preventDefault()
	        console.log('handleSubmit', e);
	        const username = this.username.current.value;       
	    }
	```


> Always keep the using of `ref` at the minimum!

## Hookup form to Controller

Its time now to hookup the form with the controller.

> How can we do that?


```
<input
    ref={ this.username }
    id="username"
    type="text"
    className="form-control"
/>
```
In our input field we want to add a `value` attr. and set it to:


**1.** let's create our form obj 

```
state = {
        account: { username: "", password: "" }
    };
```

**2.** we need to add a `value` attr to the input field and a `onChange` event listener in order to handel the change.

```
<input
    
    value={this.state.account.username}
    onChange={this.handleChange}
    
    ref={this.username}
    id="username"
    type="text"
    className="form-control"
/>
```

**3.** we need to handle the event and update the `state`

```
handleChange = (e) => {
    const account = {...this.state.account};
    account.username = e.currentTarget.value;
    this.setState({account}); 
}
```


#### Multiple Input field

> There's a problem with our current implementation: at the moment we've only hooked up the `username` input field but what about the `password` ?

1. Add a `name` attr. to each field exactly as we do in Angular:

	```
	<input
		name="username"
		value={account.username}
		onChange={this.handleChange}
	```

2. Now we can use the `name` attr. to handle the change dynamically:

	```
	handleChange = (e) => {
        const current = e.currentTarget;
        const account = {...this.state.account};
        account[current.name] = current.value;
        this.setState({ account }); 
    }
	```

> **N.B.** Unlikely Angular, in React we cannot do: `account: { username: null, password: null}`



## Extracting Reusable Input

At the moment we are repeating ourself which is not good:

```
<div className="form-group">
    <label htmlFor="username">Username</label>
    <input
        name="username"
        value={account.username}
        onChange={this.handleChange}
        ref={this.username}
        id="username"
        type="text"
        className="form-control"
    />
</div>
]
<div className="form-group">
    <label htmlFor="password">Password</label>
    <input
        value={account.password}
        onChange={this.handleChange}
        name="password"
        id="password"
        type="password"
        className="form-control"
    />
</div>
```

> See? 
> 
> We wanto to make a **dumb component** that we can feed in the way we please.

1. Let's make a an `Input` component
	
	```
	import React from "react";
	
	const Input = props => {
	
	    return null
	};
	
	```

2. What will be its **interface**? At very least it shall have the original attributes + `label` to make it dynamic:
	
	```
	<Input
	    value={account.username}
	    onChange={this.handleChange}
	    id="username"
	    name="username"
	    label="User Name"
	/>
	```

	In terms of event it shall raise an `onChange` which is already been handle in the parent component (*loginForm.jsx*).

3. Back to our *dumb* component we can now fetch in the `props` all the attributes that we need. Just like this:

	```
	const Input = props => {
	
	    const { name, label, value, onChange } = props;
	
	    return (
	        <div className="form-group">
	            <label htmlFor={ name }>{ label }</label>
	            <input
	                value={ value }
	                onChange={onChange}
	                id={ name }
	                name={ name }
	                ref={this.username}
	                type="text"
	                className="form-control"
	            />
	        </div>
	    );
	};
	```
	

## Validation



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	






















































