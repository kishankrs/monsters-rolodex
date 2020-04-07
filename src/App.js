import React, { Component } from 'react';
import {CardList} from './component/card-list/card-list.component.jsx';
import {SearchBox} from './component/search-box/search-box.component';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
     monsters: [ ],
     searchField:''
      
    };
    this.handelChange = this.handelChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users=> this.setState({monsters:users}));
  }  

  handelChange=(e) => {

    this.setState({searchField: e.target.value});
  }
  
  render() {
    const{monsters,searchField} = this.state;
    const filteredMonsters= monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(

          <div className='App'>
          <h1> Monsters Rolodex </h1>

          <SearchBox
          
          placeholder ='search monsters'
          handelChange = {this.handelChange}
           />
          
          
           
            
          
          
          <CardList monsters ={filteredMonsters}/>
          
  
          </div>
        );
       }
      }

export default App;
