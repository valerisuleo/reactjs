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

`npm i lodash --save`

```
import React from "react";
import _ from "lodash";

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange } = props;
    const pagesCount = itemsCount / pageSize;
    
    const pages = _.range(1, pagesCount + 1);
```