# Widly Project

## Install Bootstrap && Font Awsome

1. `npm i bootstrap font-awesome --save`
2. Back to `src/index.js` 
3. we need to import:

	```
	import 'bootstrap/dist/css/bootstrap.css';
	import 'font-awesome/css/font-awesome.css';
	```
4. Back to `src/App.js`

	```
	import React, { Component } from 'react';
	import './App.css';
	
	class App extends Component {
	  render() {
	    return (
	      <main className="container">
	        
	      </main>
	    );
	  }
	}
	
	export default App;
	```

5. Let's add some fake data: `src/services/...`