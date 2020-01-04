import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';
import View from './components/infodisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    }
  }

  search (location) {
    var that = this;
   // post request
    $.ajax({
      type: "POST",
      url: '/current',
      contentType: "application/json",
      data: JSON.stringify({location: location}),
      success: function(result) {

        that.setState({
          info: result
        });

      }
    })
  }


  render () {
    return (<div>
      <Search  onSearch={this.search.bind(this)}/>
      <View info={this.state.info}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));