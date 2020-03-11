import React, {Component} from 'react';
import FollowersCard from './FollowersCard'
import '../App.css'

class Followers extends Component {
    render() {
        return (
            <div className={`${this.props.clicked ? 'view' : 'container' }`}>
               {this.props.userData.map(user => {
                   return <FollowersCard url={user.url} name={user.name} photo={user.avatar_url}/>
               })}
               
            </div>
        );
    }
}

export default Followers;