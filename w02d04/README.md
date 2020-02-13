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

For now we just going to validate `onSubmit` the form.

1. Let's update our `state`

	```
	state = {
	    account: { username: "", password: "" },
	    errors: {}
	};
	
	```

2. we have to update the `handleSubmit` as well

	```
	handleSubmit = e => {
	    e.preventDefault();
	    
	    const errors = this.validate();
	    this.setState({ errors });
	
	    if (errors) return;
	};
	
	```

	> **Explenation of the code**: The `validate()` method will return an obj. We get that obj error and then call  `this.setState({ errors });` which will cause a rerendering and with that we can render *error messages*.


3. Let's build a very simple `validate()` method

	```
	 validate = () => {
	        return {username: 'usename is required.'}
	    }
	```


Now in react dev tool we should see our error obj on submit.


### Validation with Joi

To implement validation rules we are going to use a library called *Joi*

```
// EXAMPLE

const Joi = require('joi');
 
const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainAtoms: 2 })
}).with('username', 'birthyear').without('password', 'access_token');
 
```

Basically the idea behind *Joi* is to define a `schema` which is a simple obj: in this obj we are going to add all our properties and their validation requirements.

- `npm i joi-browser --save`

- back to `loginForm`:

```
import Joi from 'joi-browser'

class LoginForm extends Component {
    schema = {
        username: Joi.stringify().required(),
        password: Joi.stringify().required()
    }
```

- Now we need to update our validate method on submit using `Joi.validate()`, it will take 2 args: the first one is the obj that we wanto to validate and the second one is the `schema`.

```
 validateWholeFormOnSubmit = () => {
       const result =  Joi.validate(this.state.account, this.schema);
    };
    
```

> We got a compilation error: *Cannot read property 'username' of undefined*
> 
> Why?

This is happening because inside the `state` we cannot set a property equal to `null` 


We have to replace this:

```
handleSubmit = e => {
        e.preventDefault();
        const errors = this.validateWholeFormOnSubmit();
        
        this.setState({ errors });
        
        if (errors) return;
    };
```

wth something like this one and worst scenatio set it to an empty `{}`

```
handleSubmit = e => {
        e.preventDefault();
        const errors = this.validateWholeFormOnSubmit();
        
        this.setState({ errors: errors || {} });
        
        if (errors) return;
    };
```


Now if we put a `log` on `Joi.validate(this.state.account, this.schema);` and we navigate error/details we can see that in this `arr` currently we have only 1 item because by default Joi terminates validation as soon as it finds an error. This is what we called `abortEarly`.

![Imgur](https://www.dropbox.com/s/2l71orha2xeiha8/joi%20log.png?raw=1)

> How can fix this problem ?

We simply pass another arg: `Joi.validate(this.state.account, this.schema, { abortEarly: false });`

Now back to log we can see the `details[]` containing 2 items.

We set in the state our `error` obj which is mirroring the `account` obj for our form

```
account: {
        password: "",
        username: ""
    },
    errors: {}
```

It means that in order to display our validation message we expect our `validation()` method to return onsubmit something like this:

```
return {
            username: 'username is required.',
            password: 'password is required.',
        }
```

> Wait! *Joi* return to us an `[{},{}]`!
> 
>**How can we convert an** `[{},{}]` **into an** `{}` ?

Just like that:

```
validateWholeFormOnSubmit = () => {
        const abortEarly = { abortEarly: false };
        
        const result = Joi.validate(
            this.state.account,
            this.schema,
            abortEarly
        );

        const { details } = result.error;
        
        const mapped = details.map(item => {
            const key = item.path[0];
            const value = item.message.replace(/['"]+/g, '');
            return {
                [key]: value
            };
        });
        
        const errors = Object.assign({}, ...mapped );
        return errors;
    };
```




















