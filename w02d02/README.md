In this section...

- Pagination
- Filtering
- Sorting

# Pagination

## Component Interface

First thing firsrt let's make a reusable pagination component

```
import React from 'react';

const Pagination = (props) => {
    return null;
}
 
export default Pagination;
```

and let's define its **interface**:

- What are the `input` this component is going to receive?
	- 	We need to feed it with the `itemsCount` and `pageSize` so it can calculate the number of pages and render them.	
- What are the `events` this component is going to raise?
	- It should raise an event whenever a user click on another page.

```
...
<button
	onClick={this.reload}
	className="btn btn-primary">Reload
</button>
</div>
)}
	<Pagination itemsCount={movies.length} 
	pageSize={pageSize} onPageChange={this.handlePageChange}/> 
</main>

```

## Displaying Pages

First let's add some markup to the pagination component:

```
import React from "react";

const Pagination = (props) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link">
                        1
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
```

Now we can see just one page button. We want to be render it dynamically like:

```
const pagesCount = itemsCount/pageSize;
    // make an arr starting at 1 and finishing at pagesCount [1....pagesCount].map()
```

> How can we do that?

There are may ways, the simplest one is using **_Lodash_**:

- `npm i lodash --save`

```
import React from "react";
import _ from "lodash";

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange } = props;
    const pagesCount = itemsCount / pageSize;
    
    const pages = _.range(1, pagesCount + 1);
```

## Handling Page Changes

we want to add the `active` class to the pages btns.

1. The `Pagination` isnt't aware of which btn we are clicking because it's just passing the data. We need to make it aware so let's add a new attr. : `const { itemsCount, pageSize, onPageChange, currentPage } = props;`

2. Back to `movies.jsx` let's add the same attr `currentPage={currentPage} `

	```
	<Pagination 
	    itemsCount={movies.length} 
	    pageSize={pageSize} 
	    currentPage={currentPage} 
	    onPageChange={this.handlePageChange}/> 
	```
	
	Here we know exactly on what page we are thanks to:
	
	```
	 handlePageChange = (page) => {
	        console.log(page); 
	    }
	```
	
	So in order to pass the `currentPage` value back to `Pagination` we need to update our `state`:
	
	```
	handlePageChange = (page) => {
	        this.setState({ currentPage: page }); 
	    }
	```
	
	> Nothing happend! Why?
	
	**We need to set an initial value inside our `state` in order to update it!**
	
	```
	class Movie extends Component {
	    state = {
	        movies: [],
	        pageSize: 4,
	        currentPage: 1
	    };
	```

3. Finally back to `Pagination` we can use the *ternary operator* to add dynamically the `active` class:

	```
	<ul className="pagination">
		{pages.map((page, i) => (
		<li key={i} style={{ cursor: 'pointer' }} className={ page === currentPage ? "page-item active" : "page-item"}></li>
		))}
	</ul>
	```


## Paginating Data

It's time now to write the logic to paginate the data. This is the kinda of logic that we are gonna reuse somewhere else:

1. `mkdir common && touch common/paginate.js`

	```
	export function paginate(items, pageNumber, pageSize) {
	
	}
	```
2. `import _ from 'lodash';`
3. To paginate the data first we need to calculate the starting index of `items[]` on this page.

	```
	export function paginate(items, pageNumber, pageSize) {
	 
	    const indexStart = (pageNumber - 1) * pageSize;
	
	}
	```
4. Now we can use lodash to go to this start index and take all the items for the current page, this method will slice our `items[]` starting from  `indexStart`:


	```
	export function paginate(items, pageNumber, pageSize) {
	    const indexStart = (pageNumber - 1) * pageSize;
	    
	    _.slice(items, indexStart);     
	 }
	```
5. now we can pick item for this current page from this `array`

	```
	export function paginate(items, pageNumber, pageSize) {
	    const indexStart = (pageNumber - 1) * pageSize;
	    _.slice(items, indexStart);   
	      
	    _.take()
	}
	```
	
	We can do better: in order to **chain** the *lodash* methods we use a *wrapper obj* - `_(items)` - something like this:
	
	```
	export function paginate(items, pageNumber, pageSize) {
	    const indexStart = (pageNumber - 1) * pageSize;
	    
	    _(items).slice(indexStart).take(pageSize);
	}
	```

6. Finally we need to convert this *wrapper obj* - `_(items)` - to a regular `[]`:

	```
	export function paginate(items, pageNumber, pageSize) {
	    const indexStart = (pageNumber - 1) * pageSize;
	    
	    return _(items).slice(indexStart).take(pageSize).value();
	}
	```

Back to `movies.jsx`:

```
import { paginate } from "../utilities/paginate";
...
render() {
    const { pageSize, currentPage } = this.state;
    
    const movies = paginate(this.state.movies, currentPage, pageSize);
    

```


let's update:

- <s>`itemsCount={ movies.length }`</s>
- `itemsCount={ this.state.movies.length }`  

```
<Pagination 
    itemsCount={ this.state.movies.length } 
    pageSize={ pageSize } 
    currentPage={ currentPage } 
    onPageChange={ this.handlePageChange }/> 
```

Now the pagination works!!!


## Type Checking with PropTypes

Like in Angular also in React we have `types` in order to prevent future error and maintaining our code.

- `npm i prop-types --save`

```
import PropTypes from 'prop-types';
...
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}
```

#Filtering

## Component Interface

What's the `ListGroup` component Interface?

- As `input` it should reive a list of `genres`

Now we could initialise `genres` the same way we did for movies

```
class Movie extends Component {
    state = {
        movies: getMovies(),
        genres: getGenres(),
   };
```

but the right place is inside `componentDidMount()`: this method is called after our component is rendered into the DOM and it's the perfect place to make *AJAX* calls to get data from the server.


```
componentDidMount() {
        this.setState({ movies: this.getInitialState(), genres: getGenres() });
    }
```

- What kind of `event` should it raise?
	- we expect as minimum to get onClick the current *genre* selected.

So here's is our `interface`:

```
<aside className="col-md-3">
	<ListGroup genres={ genres } onGenreSelected={this.handleGenresSelect} />
</aside>
``` 		

## Displaying Items

```
const ListGroup = props => {
    const { genres } = props;
    console.log("props list-group", genres);
    return (
        <ul className="list-group">
            {genres.map(genre => (
                <li key={ genre._id } className="list-group-item">
                    { genre.name }
                </li>
            ))}
        </ul>
    );
};
```

> We are assuming that each obj has 2 properties:
> 
>   `{ _id: "5b21ca3eeb7f6fbccd471818", name: "Action" }` 
> 
> What if we are facing a different kind of obj which doesn't have these properties?

```
<aside className="col-md-3">
    <ListGroup
    
    textProperties="name" 
    valueProperties="_id" 
    
    genres={ genres } 
    onGenreSelected={this.handleGenresSelect} />
</aside>
```

By Passing these 2 'extra' properties we can work with any kind of obj.


```
const ListGroup = props => {

    const { genres, textProperty, valueProperty } = props;
    
    return (
        <ul className="list-group">
            {genres.map(item => (
            
                <li key={ item[valueProperty] } className="list-group-item">
                    { item[textProperty] }
                </li>
                
            ))}
        </ul>
    );
};

export default ListGroup;

```

In this way it's no longer bond to `genre` and **It can be reused everywhere**.



## Default Props

```
<aside className="col-md-3">
    <ListGroup
    
    textProperties="name" 
    valueProperties="_id" 
    
    genres={ genres } 
    onGenreSelected={this.handleGenresSelect} />
</aside>
```

Here we are passing some extra props but as we can see it makes our code a bit more verbose.

> How can we avoid that?

```
<ul className="list-group">
    {genres.map(item => (
        <li key={ item[valueProperty] } className="list-group-item">
            { item[textProperty] }
        </li>
    ))}
</ul>


ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

```


...and finally:

```
<aside className="col-md-3">
    <ListGroup
    genres={ genres } 
    onGenreSelected={this.handleGenresSelect} />
</aside>
```

## Handling Selection

Now we wanna handle the `onClick` event 

```
{genres.map(item => (
	<li onClick={ () => onGenreSelected(item) }
```

and to send back the current item to `ListGroup` component we update the `state `like this:


```
handleGenresSelect = (genre) => {
        this.setState({ selectedGenre: genre });
    }
```
and then:

```
<ListGroup
    genres={ genres }
    
    selectedGenre={this.state.selectedGenre} 
    
    onGenreSelected={this.handleGenresSelect} />
```

Back to `ListGroup`:

```
 const { genres, textProperty, valueProperty, onGenreSelected, selectedGenre } = props;
    return (
        <ul className="list-group">
            {genres.map(item => (
                <li onClick={ () => onGenreSelected(item) } key={ item[valueProperty] } 
                className={ item === selectedGenre ? "list-group-item active" : "list-group-item" }>
                    { item[textProperty] }
                </li>
```

## Implementing Filtering

We are ready to filter our movies. Here...

```
const movies = paginate(this.state.movies, currentPage, pageSize);
```

...we call the paginate method to paginate the movies. We need to apply the filter before pagination, because the number of pages should be based in the number of filtered movies.

```
const { pageSize, currentPage, genres, selectedGenre} = this.state;
        
const movies = paginate(this.state.movies, currentPage, pageSize);

const filtered = selectedGenre ? this.state.movies.filter(m => m.genre._id === selectedGenre._id) : movies;
```


then...

```
<Pagination
    itemsCount={!selectedGenre ? this.state.movies.length : filtered.length }
    pageSize={pageSize}
    currentPage={currentPage}
    onPageChange={this.handlePageChange}
/>
```






