import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onInputChange = (e) => {
    this.setState({term: e.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term)
  }

  render () {
    return (
      <div className="search-bar ui segment" style={{marginTop: '30px', backgroundColor: 'rgb(210, 219, 248)'}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label >Video Search</label>
            <input 
              type="text"
              placeholder="請輸入你要搜尋的關鍵字"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}


export default SearchBar;