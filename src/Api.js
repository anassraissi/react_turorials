import logo from './logo.svg';
import React, { Component } from 'react';
import axios from 'axios'

async function getUser(){
    try{
            const data=await axios.get('https://jsonplaceholder.typicode.com/users'); 
            // axios Client HTTP basé sur les promesses pour navigateur et node.js 
            console.log(data);
            return data;
    }   
    catch(error){
            console.error(error);
    }
}


class Api extends Component {
     state={
            users:[]
        }

    componentDidMount=()=>{  //katkhdam mnba3d ma recuperi component chi haja  // life cycle hook for component
        getUser().then(Response=>{
                this.setState({
                    users:Response.data
                })
        })
    }

    render(){
        return(
                <div className='App' >
                    <h2>list the names of an data by api fetch from axios  </h2>
                      <ul>
                        {this.state.users.map(user=>
                           <li>{user.name}</li> 
                            )}
                    </ul>  
                </div>
        );

    }
}
export default Api;
