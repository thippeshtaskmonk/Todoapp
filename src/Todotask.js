import React from 'react';
import List from '../src/List';
export default class TodoTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          items: []
        };
      }
    
      onChange = (event) => {
        this.setState({ term: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
      }

      handleDelete = ()=>{ 
        {this.state.items.splice()}
        
      }
    render() {
        return (
            <div>
            <form className="Abc" onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange}/>
              <button>Submit</button>
            </form>
            <List items={this.state.items} />
          </div>
        );
}
}