import React from 'react';
import axios from 'axios'
import Card from './Card'
import Usercard from './Usercard'

class App extends React.Component {
  state = {
      myProfile: [], 
      error: '', 
    };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/HenryRDavis')
      .then(res => {
        this.setState({
          myProfile: res.data,
        })
      })
      .catch(err => {
        console.log(err, 'Oops, try again.');
      })
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
      <Card props={this.state.myProfile}/>
        <h3>My Followers:</h3>
        <Usercard />
      </header>
    </div>
  );
}
}

export default App;
