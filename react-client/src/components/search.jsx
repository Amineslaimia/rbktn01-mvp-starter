import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  search() {
    this.props.onSearch(this.state.value);
  }


  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div id="search">
        <input

          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button  onClick={this.search.bind(this)}>
         search
        </button>
      </div>
    );
  }
}
export default Search;