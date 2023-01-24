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
			<div>
				 <div className="head"> 
					<Link to={`add`} className="head__btn">Add New</Link>
					<h2>Users data</h2>
				</div>
			<div className="main flex-center">
					 
							 
										 
												 {users.map((user, index) =>(
			
													<div className="post" key={user.id}>
													
														 
																 <h3>#{index+1} - {user.uuid}</h3>
																 <img src="./rigel.png" className="post__img" alt="rigel"/>
																 <p className="post__data">{user.firstName}</p>
																 <p className="post__data">{user.lastName}</p>
																 <p className="post__data">{user.user_name}</p>
																 <p className="post__data">{user.test_ind}</p>
																 <div className="post__btn">
																		 
																		 <button onClick={()=>deleteUser(user.id)} className="button__danger">Delite</button>
																 </div>
														 
													</div>
												 ))}
			
												 
					 
			</div>
			</div>
					)
}
export default UserList;




// {users.map((user, index) =>(
// 	<tr key={user.id}>
// 			<th>{index+1}</th>
// 			<th>{user.uuid}</th>
// 			<th>{user.firstName}</th>
// 			<th>{user.lastName}</th>
// 			<th>{user.user_name}</th>
// 			<th>{user.test_ind}</th>
// 			<th>
// 					<Link to={`edit/${user.id}`} className="button is-small is-info">Edit</Link>
// 					<button onClick={()=>deleteUser(user.id)} className="button is-small is-danger">Delite</button>
// 			</th>
// 	</tr>

// ))}