# Calling Backend Services

## GET (INDEX) 


As we know react is a lightweigh library so it doesn't have an opionion about how we should make http request, we can choose between:

![Imgur](https://www.dropbox.com/s/xau0clfultzsjtw/http%20options.png?raw=1)


- `npm i axios --save`

- `import axios from 'axios'`

As we know the right cycle hook to make a http req is:

```
componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
    }
```

Now this method return a `Promise`

```
    componentDidMount() {
        const promise = axios.get('https://jsonplaceholder.typicode.com/posts')
        // promise.then() // this is very old school
        const response = await promise;
        console.log(response);
    }
```

> We got a compilation **error**! How come?

This is happening because we are missing the `async` decorator!

```
async componentDidMount() {
        const promise = axios.get('https://jsonplaceholder.typicode.com/posts')
        // promise.then() // this is very old school
        const response = await promise;
        console.log(response.data);
    }
```

###### Quick refactoring:

```
async componentDidMount() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response);
    }
```

FInally we update our state:

```
state = {
        posts: []
    };

    async componentDidMount() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const posts = response.data;
        this.setState({ posts })
    }
```

## POST (CREATE)

```
handleAdd = async () => {
        const obj = {
            title: 'title',
            body: 'body',
        }
        const response = await axios.post(apiEndPoint, obj);
        const postNew = response.data;
        const posts = [...this.state.posts];
        posts.push(postNew);
        // const posts = [postNew, ...this.state.posts] // to make postNew appears at the top of the list
        this.setState({ posts })
    };
```


## PUT (UPDATE)

```
handleUpdate = post => {
        post.title = 'UPDATED';
        axios.patch
        axios.put
    };
```

> **PUT VS PATCH**
> 
> We use *PATCH* to update one or more properties;
> 
> We use *PUT* to update one or more properties;

When we use `axios.put()` as second arg we pass the whole post obj:

```
 handleUpdate = post => {
        post.title = 'UPDATED';
        axios.put(`apiEndPoint/${post.id}`, post)
    };
```

while when se use `axios.patch()` we can pass an obj to update a specific property:

```
handleUpdate = post => {
        post.title = 'UPDATED';
        axios.patch(`apiEndPoint/${post.id}`, { title: post.title });
    };
```

it's time to update a post:

```
handleUpdate = async (post) => {
        post.title = 'UPDATED';
        const response = await axios.put(apiEndPoint + `/${post.id}`, post);
        const postUpdated = response.data;

        const posts = [...this.state.posts];
        const findIndex = posts.findIndex((item) => {
            return item.id === post.id
        });
        posts[findIndex] = postUpdated;
        this.setState({ posts });
    };
```


## DEL (DELETE)

```
handleDelete = async (post) => {
        const response = await axios.put(apiEndPoint + `/${post.id}`);
        console.log(response);
    };
```

At this point the post has been deleted from the server so we should update our view:

```
handleDelete = async (post) => {
        const response = await axios.delete(apiEndPoint + `/${post.id}`);
        console.log(response);
        
        const posts = [...this.state.posts];
        // 1. we need to find the index of the item in the array
        let postIndex = posts.indexOf(post);
        // 2. now we can pass the index as argument into the splice method.
        posts.splice(postIndex, 1);
        this.setState({ posts });
    };
```

## Optimistic vs Pessimistic Updates

It looks pretty good but we have a tiny issue: it takes a moment to update the views after we delete, create or update a post.

If we assume that most of the time we get a `200` we can rewrite our code to make it faster:

```
handleDelete = async (post) => {
        const defaultPosts = this.state.posts;
        const posts = [...this.state.posts];
        
        // updating UI
        let postIndex = posts.indexOf(post);
        posts.splice(postIndex, 1);
        this.setState({ posts });

        // call server && error handling
        try {
            const response = await axios.put(apiEndPoint + `/${post.id}`);
            console.log('response', response);
            // throw new Error(''); // simulate an error            
        } catch (error) {
            console.log('oops! something went wrong!', error);
            this.setState({ posts: defaultPosts });
        }
    };
```

So first we update the UI and then we call the server and ff there's an error we can always set the state back to its default value `defaultPosts`.


## Handling Errors

Let's write a wrong endpoint:

```
handleDelete = async (post) => {
        const defaultPosts = this.state.posts;
        const posts = [...this.state.posts];

        let postIndex = posts.indexOf(post);
        posts.splice(postIndex, 1);
        this.setState({ posts });

        try {
            await axios.put('https://jsonplaceholder.typicode.com/posts/coddio' + `/${post.id}`);
        } catch (error) {
            const { status } = error.response;
            
            status === 404 ? console.log('404 - Not Found') : console.log('oops...something went wrong!');

            this.setState({ posts: defaultPosts });
        }
    };
```


### Axios Interceptors

We can use interceptor to handle *unexpected* error globally:

```
axios.interceptors.response.use(null, error => {
    const { status } = error.response;
    const expectedError = status >= 400 && status < 500;

    if (!expectedError) {
        console.error('oops...UNEXPECTED ERROR')
    }

    return Promise.reject(error);
});
```

let's update our error handler

```
     // error handling
        try {
            await axios.put('https://jsonplaceholder.typicode.com/posts/coddio' + `/${post.id}`);
        } catch (error) {

            if (error.response.status === 404) {
                console.log('404 - Not Found')
            } 
            this.setState({ posts: defaultPosts });
        }
    };
```


## Reusable Http Service

1. `touch httpService.js`
2. In this file we want to move everything refering to `axios`

	```
	import axios from "axios";
	
	axios.interceptors.response.use(null, error => {
	    const { status } = error.response;
	    const expectedError = status >= 400 && status < 500;
	
	    if (!expectedError) {
	        console.error("oops...UNEXPECTED ERROR");
	    }
	    return Promise.reject(error);
	});
	
	export default {
	    get: axios.get,
	    post: axios.post,
	    put: axios.put,
	    delete: axios.delete
	};
	```

3. Back to App.js now we can update our code
	
	<s>`const response = await axios.get(apiEndPoint);`</s>
	`const response = await http.get(apiEndPoint);;`




## Extracting a Config Module

Having this `const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts';` at the top is pretty ugly and we probably gonna reuse this `api` somewhere else:

1. `touch config.json` and:

	```
	{
	    "postAPI": "https://jsonplaceholder.typicode.com/posts"
	}
	```

2. Back to App.js at the top `import config from './config.json';`

	<s>`const response = await axios.get(apiEndPoint);`</s>
		`const response = await http.get(config.postAPI);;`


## Dispaying Toast Notifications

1. `npm i react-toastify --save`;
2. We need to import:

	```
	import { ToastContainer, toast } from "react-toastify";
	import 'react-toastify/dist/ReactToastify.css'
	```
3. Let's update our delete method

	```
	// error handling
	try {
	    await http.put(config.postAPI + `/${post.id}`);
	} catch (error) {
	    const { status } = error.response;
	
	    if (status === 404) {
	        toast.error(`Not Found ${status}`);
	    } 
	```

4. Same for the intercpetor

	```
	import axios from "axios";
	
	import { toast } from "react-toastify";
	
	axios.interceptors.response.use(null, error => {
	    const { status } = error.response;
	    const expectedError = status >= 400 && status < 500;
	
	    if (!expectedError) {
	        toast.error("oops...UNEXPECTED ERROR")
	    }
	    return Promise.reject(error);
	});
	```


 















 