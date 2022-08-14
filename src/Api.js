import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import View_user from './component/View_user'
import {getUser} from './component/Users';  
// jbad fonction getUser katdir wahed traitemet machi ghi katafichi




class Api extends Component {
     state={
            users:[],
            user:{}
        }

    componentDidMount=()=>{  //katkhdam mnba3d ma recuperi component chi haja  // life cycle hook for component
        getUser().then(Response=>{
                this.setState({
                    users:Response.data
                })
        })
    }
    view_user=(user)=>{
        this.setState({
            user:user
        })
    }

    render(){
        return(
                <div className='App' >
                    <h2>list the names of an data by api fetch from axios  </h2>
                      <ul>
                        {this.state.users.map(user=>
                           <li key={user.id}>{user.name} {' '}
                            <button onClick={()=>this.view_user(user)} >view user</button> 
                           </li>
                            )}
                    </ul>
                    <hr></hr>
                    <div>
                        {this.state.user.id >0 ?
                        <View_user user={this.state.user}></View_user>
                        : <h3 className='red'> please select an user</h3>
                        }
                      
                        
                    </div>  
                </div>
        );

    }
}
export default Api;
