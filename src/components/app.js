import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import UserList from '../containers/user_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <UserList/>
      </div>
    );
  }
}
