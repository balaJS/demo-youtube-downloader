import React, { Component } from 'react';
import Tabs from './right-elems/Tabs.js';

class Rightside extends Component {
	render() {
		const elements = (<div className="col-sm-6">
		 	<h3>Output</h3>
		 	<div className="container">
		 		<Tabs defaultActiveKey={1}/>
			</div>
		</div>);
		return elements;
	}
}

export default Rightside;
