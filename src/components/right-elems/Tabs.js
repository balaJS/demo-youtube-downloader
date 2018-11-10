import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Table from './Table.js';

class Tabs extends Component {
  render() {
    const element = (<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Video">
        Tab 1 content
      </Tab>
      <Tab eventKey={2} title="Audio">
        Tab 2 content
      </Tab>
    </Tabs>);

    return element;
  }
}

export default Tabs;