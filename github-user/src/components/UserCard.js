import React, { Component} from 'react';
import styled from 'styled-components'
import '../App.css'

const Container = styled.section`{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh; 
    width: 80%;
    margin: 0 auto;
    background-image: linear-gradient(to right, black, grey, black);
    box-shadow: 5px 5px 10px black;
}`

class UserCard extends Component {

    render() {
        return (
            <Container>
              {this.props.user.map(user => {
                 return <div key={user.id}>
                            <div className='card'>
                            <div>
                           <h1>{user.name}</h1>
                           </div>
                           <div>
                           <img className='img' src={user.avatar_url}/>
                           </div>
                           <div>
                           <button onClick={this.props.handleUpdate}>See My Followers</button>
                           </div>
                           </div>
                        </div>
                        
              })}
            </Container>
        );
    }
}

export default UserCard;