import React, { Component } from 'react';
import Tabitems from './right-elems/Tabitems.js';

class Rightside extends Component {
	render() {
		const elements = (<div className="col-sm-6">
		 	<h3>Output</h3>
		 	<div className="container">
		 		<Tabitems/>
			</div>
		</div>);
		return elements;
	}
}

export default Rightside;
