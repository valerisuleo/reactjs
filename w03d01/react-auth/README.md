# Authentication and Authorization

In this section...

- JSON web Tokens
- Protecting Routes

## AuthService

We've tested our API on *insomnia* and it works fine: we can `login` and we can clearly see our *JSON web Tokens*

>How can we attach the `Headers` to our request?

1. Back to our httpService
	
	```
	import axios from 'axios';

	function setJwt(jwt) {
	    axios.defaults.headers.common["Authorization"] = !jwt ? 'Bearer' : jwt;
	  }
	
	export default {
	    get: axios.get,
	    post: axios.post,
	    put: axios.put,
	    delete: axios.delete,
	    setJwt
	};	

	```

2. Let's make a `authService`

	```
	import http from "./httpService";
	import api from "../config.json";
	
	const tokenKey = 'jwt';
	
	http.setJwt(getJwt());
	
	function saveData(key, value) {
		localStorage.setItem(key, value);
		}
		
		export function login(data) {
		http.post(api.login, data)
		.then((response) => {
			const { message, token } = response.data;
			saveData("jwt", token);
			saveData("message", message);
			window.location = '/';
		});
	}	
```

3. Finally in our `Login` component

	```
    loginUser() {
        const { data } = this.state;
        authService.login(data);
    }
    
    doSubmit() {
        this.loginUser();
    }
	```
	
## Secure Route

In our `authService.js`

```
export function secureRoute(history) {
    if (!localStorage.getItem('jwt')) {
        history.push('/login')
    }
}

export default login;
```

Now we can simply secure our routes by doing

```
class MoviesIndex extends Component {
    state = {
        data: {},
        movie: {},
        movies: [],
    };

    constructor(props) {
        super(props);
        authService.secureRoute(props.history);
    }
```