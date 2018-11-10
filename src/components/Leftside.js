import React, { Component } from 'react';

class Leftside extends Component {
	render() {
		const elements = (<div className="col-sm-6">
				<h3 className="text-left">Url</h3>
				<form className="form-inline" action="#">
					<input type="text" className="form-control" name="get-url" required/>
					<button className="btn btn-primary">Submit</button>
				</form>
			</div>);
		return elements;
	}
}

export default Leftside;