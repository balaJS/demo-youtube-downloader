import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Table from './Table.js';

class Tabitems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    console.log('selected' + key);
    this.setState({ key: key });
  }

  render() {
    console.log(this.state.key);

    return(<Tabs onSelect={this.handleSelect} id="output-tabs">
      <TabList>
        <Tab>Video</Tab>
        <Tab>Audio</Tab>
      </TabList>
      <TabPanel key={1}>
        <Table />
      </TabPanel>
      <TabPanel key={2}>
        <Table />
      </TabPanel>
      </Tabs>);
  }
}

export default Tabitems;