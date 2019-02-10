# Widly Project

## Install Bootstrap && Font Awsome

1. `npm i bootstrap font-awesome --save`
2. Back to `src/index.js` 
3. we need to import:

	```
	import 'bootstrap/dist/css/bootstrap.css';
	import 'font-awesome/css/font-awesome.css';
	```
##### Make a Movies Component

1. `mkdir components && touch components/movies.jsx`
2. Back to `src/components/movies.jsx`:

	```
	import React, { Component } from 'react';
	
	class Movies extends Component {
	  render() {
	      <main className="container">

      </main>
	  }
	}
	
	export default Movies;
	```
3. Back to `/index.js` here we need to import our component `import Movies from './components/movies';`
4. we pass the component as argument instead of the `<App />` like this: `ReactDOM.render(<Movies />, document.getElementById('root'));`
5. Back in the browser let's check the result!

##### Import Fake Data form Service

```
state = {
    movies: getMovies()
  }
```

##### Import
