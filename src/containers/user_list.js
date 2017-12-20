import React, { Component } from 'react';
import { connect } from 'react-redux';
//export coonected version of weatherlist, so i removed export default
class UserList extends Component {
    renderUsers(user) {
        return (
            <li class="list-group-item">
                <div >
                    <a href={"/" + user.login}>
                        <img class="avatar float-left" height="48" src={user.avatar_url} width="48" />
                    </a>
                </div>
                <div>
                    <a href={"/" + user.login}>{user.login}</a>
                </div>
            </li>
        );
    }

    render() {
        return (
            <div>
                <ul class="list-group">
                    {this.props.userList.map(this.renderUsers)}
                </ul>

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.userList);
    return { userList: state.userList }
}

export default connect(mapStateToProps)(UserList);