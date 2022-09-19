import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';

import SeachBar from './components/searchbar';

const API_KEY = 'AIzaSyBfd4a3pn9UZ6pf79NdXQSJKgQzOcBPQrE';

// create new component
// producing some html file
const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}
// const App = function() { // atau pake arrow function kayak const App = () => {...}, bedanya di 'this' doang
//     return <div>test test</div>;
// }

// the generated html should be put in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
