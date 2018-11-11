import React, { Component } from 'react';

class Table extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {'key': '1'};

  }
  render() {
    const element = (<table className="table table-bordered">
        <thead>
          <tr>
            <th>Resolution</th>
            <th>FileSize</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bala</td>
            <td>Doe</td>
            <td><button className="btn btn-success">Download</button></td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td><button className="btn btn-success">Download</button></td>
          </tr>
        </tbody>
      </table>);

      return element;
  }  
}

export default Table;