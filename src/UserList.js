import React,{useState,useEffect} from 'react';
import axios from "axios";
import User from "./User";
function UserList(){
    let [lists,setLists]=useState([]);
    useEffect(() => {
       axios.get("https://jsonplaholder.typicode.com/users")
       .then(response=>setLists(...response.data));
     
    }, [])
    console.log(lists)
    return (
        <div className='Userlsit'>
            {lists.map((list)=>
            <User list={list}/>
            )}
        </div>
    )
}

export default UserList
