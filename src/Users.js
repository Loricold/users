import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Users.css"

export default function Users() {
    let [loaded, setLoaded] = useState(false);
    let [users, setUsers] = useState(null);

    function handleResponse(response) {
        setUsers(response.data);
        setLoaded(true);
    }    
    
    if (loaded) {
        return (
            <div className="table-responsive-md">
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Website</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    {users.map(function(user, index){
                      return(
                        <tr key={index} className="users">
                            <td>{user.name}</td>
                            <td>{user.company.name}</td>
                            <td><a href="/">{user.website}</a></td>
                            <td><a href={"mailto:" + user.email}>{user.email}</a></td>
                            <td><a href={"tel:" + user.phone}>{user.phone}</a></td>
                        </tr>
                      )  
                })}
                 </table>
        </div>
        )
    } else {
        let apiUrl = `https://jsonplaceholder.typicode.com/users`
        
        axios.get(apiUrl).then(handleResponse);
        
        return null;
    }
}