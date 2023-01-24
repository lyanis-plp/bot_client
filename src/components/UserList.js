import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const UserList = ()=>{
    const [users, setUsers] = useState([]);
    useEffect(() => { getUsers(); },[]);

    const getUsers = async  () => {
        const respons = await axios.get("http://localhost:5000/users");
        setUsers(respons.data);
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        }catch (error){
            console.log(error)
        }
    };

    return(


<div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to={`add`} className="button is-success">
            Add New
        </Link>
               <table className="table is-striped is-fullwidth">
                   <thead>
                        <tr>
                            <th>No</th>
														<th>uuid</th>
                            <th>firstName</th> 
                            <th>lastName</th>
                            <th>user_name</th>
														<th>test_ind</th>
                            <th>Action</th>
                        </tr>
                   </thead>
                   <tbody>
                   {users.map((user, index) =>(
                       <tr key={user.id}>
                           <th>{index+1}</th>
                           <th>{user.uuid}</th>
													 <th>{user.firstName}</th>
                           <th>{user.lastName}</th>
                           <th>{user.user_name}</th>
													 <th>{user.test_ind}</th>
                           <th>
                               <Link to={`edit/${user.id}`} className="button is-small is-info">Edit</Link>
                               <button onClick={()=>deleteUser(user.id)} className="button is-small is-danger">Delite</button>
                           </th>
                       </tr>

                   ))}

                   </tbody>
               </table>
    </div>
</div>
    )
}
export default UserList;