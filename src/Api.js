import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import View_user from './component/View_user'
import {getUser,DeletetUser} from './component/Users';  
// jbad fonction getUser katdir wahed traitemet machi ghi katafichi

class Api extends Component {
     state={
            users:[],
            user:{}
        }

    componentDidMount=()=>{  //katkhdam mnba3d ma recuperi component chi haja  // life cycle hook for component
        getUser().then(Response=>{   //jbad dak data ila jat mn fonction  
                this.setState({
                    users:Response.data   //affecter data l users
                })
        })
        .catch(error=>{  //ila majatch aficher error
            alert('data not be returned, check maybe internet');
        })
    }
    view_user=(user)=>{
        this.setState({
            user:user
        })
    }
    Delete_user=(index)=>{
    
      DeletetUser(index)
      
        .then(()=>{  // kamel traitememt ila kan true
        let users=this.state.users;   
        users.splice(index,1);  //mhi dak index
        this.setState({users}) //reje3 data bach afichiwha
      })
      .catch(error=>{   // sinon aficher error
        alert('the data not be able to delete');
    })

    }
    render(){
        return(
                <div className='App' >
                    <h2>list the names of an data by api fetch from axios  </h2>
                      <ul>
                        {this.state.users.map(user=>
                           <li key={user.id}>{user.name} {' '}
                            <button onClick={()=>this.view_user(user)} >view user </button> 
                            <button onClick={()=>this.Delete_user(user.id)} >Delete user </button> 
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
