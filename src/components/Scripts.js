import React, { Component } from 'react';
//import PropTypes from "prop-types"; //Comment it due to 'PropTypes' is defined but never used  no-unused-vars waring

class Scripts extends Component {
	
	render() {
		const scripts = ['https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js','https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js','https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js','https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js'];
		const all_script = scripts.map(function(name,index) {
			//return <script src={name}></script>;
			return React.createElement('script',{'src':name,'key':index,'defer':true});
		});

		return all_script;
	}
}

export default Scripts;
