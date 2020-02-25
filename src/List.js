import React from 'react';
const List = props => (
  <ul>
    {
      props.items.map((item, index) => <div><input type="checkbox"/> <span key={index}>{item}</span> <input type="button" onClick={this.handleDelete}></input></div>)
    }
    
  </ul>
);

export default List