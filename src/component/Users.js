import axios from 'axios'

export async function getUser(){
            const data=await axios.get('https://jsonplaceholder.typicode.com/users'); 
            // axios Client HTTP basé sur les promesses pour navigateur et node.js 
            return data;
    
}

export async function DeletetUser(id){
    
            const data=await axios.DELETE('https://jsonplaceholder.typicode.com/users/'+id); 
            // axios Client HTTP basé sur les promesses pour navigateur et node.js 
            return data;
     
}
export async function updateUser(id,value){ //update with value
    
    const data=await axios.put('https://jsonplaceholder.typicode.com/users/'+id,value); 
    // axios Client HTTP basé sur les promesses pour navigateur et node.js 
    return data;

}