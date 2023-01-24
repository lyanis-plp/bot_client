import React, {useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"

const AddWord = ()=>{
    const [login,setLogin] = useState("");
    const [ingtext,setIngtext] = useState("");
    const [rutext,setRutext] = useState("");
    const navigate = useNavigate();

    const seveWord = async (e)=>{
        e.preventDefault();
            try{
                await  axios.post('http://localhost:5000/words',{
									login,
									ingtext,
									rutext
                }); navigate("/words");
            } catch (error) {
                console.log(error);
            }

    }

    return(
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`/`} className="button is-success">
                    Home
                </Link>
                <form onSubmit={seveWord}>
                    <div className="field">
                        <label className="label">Theam:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={login}
                                   onChange={(e)=>setLogin(e.target.value)}
                                   placeholder="Theam"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Inglish text:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={ingtext}
                                   onChange={(e)=>setIngtext(e.target.value)}
                                   placeholder="Inglish text"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Russian text:</label>
                        <div className="control">
                             
														 <input type="text"
                                  className="input"
                                  value={rutext}
                                  onChange={(e)=>setRutext(e.target.value)}
																	placeholder="Russian text"/>
                                     
                                 
                             
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">Save</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default AddWord;





