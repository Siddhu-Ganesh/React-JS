import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";
import axios from 'axios';
import { UserContext } from "./UserContext";

function Users(){

    const[users,SetUsers]=useState([])
    useEffect(()=>{
          getAllUsers();
    },[])

    const getAllUsers=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            console.log("All users", response.data);
            SetUsers(response.data)
        }).catch(error=>{

        })
    };

    const userActions=(actions,data)=>{
        if(actions==='add'){
            SetUsers([...users,{id:users.length+1,...data}])
        }else{
            SetUsers(users.filter(user => user.id !== data))
        }
    };

    return(
        <div className="container">
            <div className="row">
                <UserContext.Provider value={{users: users,userActions}}>
                <UserList/>
                <AddUser/>
                </UserContext.Provider>

            </div>
            

        </div>
    )
}

export default Users;