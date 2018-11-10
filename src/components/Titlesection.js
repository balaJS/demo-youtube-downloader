import React, { Component } from 'react';
//import PropTypes from "prop-types"; //Comment it due to 'PropTypes' is defined but never used  no-unused-vars waring

class Titlesection extends Component {
	constructor(props) {
       super(props);

		this.state = {
			className: 'jumbotron text-center',
			innerHTML: 'Download Video and Audio from YouTube'
		};
	}

	render() {
		const title = <div className={this.state.className}>
		  <h1>{this.state.innerHTML}</h1>
		</div>;

		return title;
	}
}

export default Titlesection;