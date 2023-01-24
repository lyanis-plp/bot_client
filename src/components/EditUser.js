import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"

const EditUser = ()=>{
    const [uuid,setUuid] = useState("");
    const [firstName,setFname] = useState("");
    const [lastName,setLname] = useState("");
		const [user_name,setUser_name] = useState("");
		const [test_ind,setInd] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getUserById();
    }, []);

    const updateUser = async (e)=>{
        e.preventDefault();
        try{
            await  axios.patch(`http://localhost:5000/users/${id}`,{
							uuid,
							firstName,
							lastName,
							user_name,
							test_ind
            }); navigate("/users");
        } catch (error) {
            console.log(error);
        }

    };
    const getUserById = async ()=>{
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setUuid(response.data.uuid);
        setFname(response.data.firstName);
        setLname(response.data.lastName);
				setUser_name(response.data.user_name);
				setInd(response.data.test_ind);
    };

    return(
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <div className="field">
                        <label className="label">uuid:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={uuid}
                                   onChange={(e)=>setUuid(e.target.value)}
                                   placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">firstName:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={firstName}
                                   onChange={(e)=>setFname(e.target.value)}
                                   placeholder="firstName"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">lastName:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={lastName}
                                   onChange={(e)=>setLname(e.target.value)}
                                   placeholder="lastName"/>
                        </div>
                    </div>
										<div className="field">
                        <label className="label">user_name:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={user_name}
                                   onChange={(e)=>setUser_name(e.target.value)}
                                   placeholder="user_name"/>
                        </div>
                    </div>
										<div className="field">
                        <label className="label">test_ind:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={test_ind}
                                   onChange={(e)=> setInd(e.target.value)}
                                   placeholder="test_ind"/>
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">Update</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default EditUser;