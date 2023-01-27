import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link} from "react-router-dom";


const MainList = ()=>{
    // const [users, setUsers] = useState([]);
    // useEffect(() => { getUsers(); },[]);
		const [login,setLogin] = useState("");
    const [pwd,setPwd] = useState("");
    const navigate = useNavigate();

    const seveWord = async (e)=>{
        e.preventDefault();
            try{
                // await  axios.post('http://localhost:5000/words',{
								// 	login,
								// 	pwd,
									
                // }); navigate("/words");
            } catch (error) {
                console.log(error);
            }

    }
    

    

    return(
			<div>
					<div className="head"> 
						<h2>Main</h2>
					</div>
					<div className="main flex-center">
					<div className="post__form">
					<h3>Sing in</h3>
					<img src="./rigel.png" className="post__img" alt="rigel"/>
					<form onSubmit={seveWord}>
                    <div className="field">
                        <label className="post__label">Логин:</label>
                        <div className="post__control">
                            <input type="text"
                                   className="input"
                                   value={login}
                                   onChange={(e)=>setLogin(e.target.value)}
                                   placeholder="логин"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="post__label">Пароль:</label>
                        <div className="post__control">
                            <input type="password"
                                   className="input"
                                   value={pwd}
                                   onChange={(e)=>setPwd(e.target.value)}
                                   placeholder="пароль"/>
                        </div>
                    </div>
                    
                    <div className="field">
                        <button type="submit" className="button">Войти</button>
                    </div>
                </form>
					</div>
					</div>
			</div>
					)
}
export default MainList;





// {users.map((user, index) =>(
			
// 	<div className="post" key={user.id}>
	
		 
// 				 <h3>#{index+1} - {user.uuid}</h3>
// 				 <img src="./rigel.png" className="post__img" alt="rigel"/>
// 				 <p className="post__data">{user.firstName}</p>
// 				 <p className="post__data">{user.lastName}</p>
// 				 <p className="post__data">{user.user_name}</p>
// 				 <p className="post__data">{user.test_ind}</p>
// 				 <div className="post__btn">
						 
// 						 <button onClick={()=>deleteUser(user.id)} className="button__danger">Delite</button>
// 				 </div>
		 
// 	</div>
//  ))}