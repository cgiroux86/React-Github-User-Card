import React, { Component } from 'react';
import './App.css';
import UserCard from './components/UserCard'
import Followers from './components/Followers'
import Search from './components/Search'
import axios from 'axios'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      user: [],
      userData: [],
      clicked: false,
      name: 'cgiroux86',
      newName: ''
    }
  }

  handleUpdate = e => {
    this.setState({
      clicked: !this.state.clicked
    })
   
  }

  handleChange = e => {
    this.setState({
      newName: e.target.value
    })
    console.log(this.state.name)
  }

 handleSubmit = e => {
   e.preventDefault()
   this.setState ({
     name: this.state.newName  
   })  

   this.setState({
    newName: ''
  })

 }



  componentDidMount() {
    
    axios.get(`https://api.github.com/users/${this.state.name}`, {headers: {Authorization: 'token 53e8d76f69bae46f513d1a1404b9e4c1c82ce210'}}).then(res => {
      console.log(res)
    this.setState({
        user: [res.data]
      })
  }).catch(err => console.log(err))
  axios.get(`https://api.github.com/users/${this.state.name}/followers`).then(res => {
    res.data.forEach(elem => axios.get(elem.url).then(res => {
    this.setState({
      userData: [...this.state.userData, res.data]
    })
  }))
})
  }

componentDidUpdate(prevProps, prevState) {
  if (prevState.name !== this.state.name) {
    console.log(prevState.name, this.state.name)
  
  axios.get(`https://api.github.com/users/${this.state.name}`).then(res => {
    this.setState({
      user: [res.data],
      userData: []
    })
}).catch(err => console.log(err))

axios.get(`https://api.github.com/users/${this.state.name}/followers`).then(res => {
  res.data.forEach(elem => axios.get(elem.url).then(res => {
  this.setState({
    userData: [...this.state.userData, res.data]
  })
}))
}
)}}

  
 








  render() {
 
    return (
      <div className='App'>
        <h1>Github Users Search</h1>
        <div className='div'>
        <Search name={this.state.newName} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>
        <UserCard handleUpdate={this.handleUpdate} user={this.state.user}/>
      <div>
        <Followers handleUpdate={this.handleUpdate} clicked={this.state.clicked} userData={this.state.userData}/>
      </div>
      </div>
    );
  }
}

export default App;
