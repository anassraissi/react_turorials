import axios from 'axios'

export async function getUser(){
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