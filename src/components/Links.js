import React, { Component } from 'react';
//import PropTypes from "prop-types"; //Comment it due to 'PropTypes' is defined but never used  no-unused-vars waring

class Links extends Component {
	
	render() {
		const Links = ['https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'];
		const all_links = Links.map(function(name, index) {
			//return <script src={name}></script>; //it makes syntax error.//
			return React.createElement('link',{'rel':'stylesheet','href':name,'key':index});
		});

		return all_links;
	}
}

export default Links;
