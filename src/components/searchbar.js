import React , {Component} from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render() {
        // return <input onChange={this.onInputChange} />;
        //or
        //return <input onChange={(event) => console.log(event.target.value) } />;
        return 
        (
            <div>
            <input onChange={event => this.setState({term: event.target.value}) } />
            Value of the input: {this.state.term}
            </div>
        );
    }

    // got commented because using the second variation
    // onInputChange(event) {
    //     //whenever the input changes, run these
    //     //param: event = what is actually going on?
    //     console.log(event.target.value);

    // } 
}

new SearchBar;

export default SearchBar;