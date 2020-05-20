import React from 'react';

import Filters from './components/Filters';
import Topbar from './components/Topbar';
import Contacts from './components/Contacts';

import './App.scss';
import Contact from './components/Contact';

class App extends React.Component {
  state = {
		filter_attr: "name",
		value: "",
		ascend: true
	}
  render = () => {
    
    return (
      <React.Fragment>
        <div data-testid="app" className="app">
          <Topbar></Topbar>
          <Filters parent={this} ></Filters>
          <Contacts filter={this.state} ></Contacts>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
