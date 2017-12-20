import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchUserList } from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term : ''}
    }

    onInputChange(event){
        this.props.fetchUserList(event.target.value);
        this.setState({term: event.target.value});
    }

    // onFormSubmit(event){
    //     event.preventDefault();
    //     // We need to go and fetch weather

    //     this.props.fetchWeather(this.state.term);
    //     this.setState({ term : '' });
    // }

    render(){
        return(
            <form className="input-group">
                <input 
                    placeholder="Find a member...." 
                    className="form-control"
                    value={this.state.term}
                    onChange={e=>this.onInputChange(e)}/>
            </form>
        );
    }
}

function mapDisPatchToProps(dispatch) {
    return bindActionCreators({ fetchUserList }, dispatch);
}

export default connect(null, mapDisPatchToProps)(SearchBar);