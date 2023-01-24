import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"

const EditWord = ()=>{
    const [login,setLogin] = useState("");
    const [ingtext,setIngtext] = useState("");
    const [rutext,setRutext] = useState("");
		
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
			getWordsById();
    }, []);

    const updateWord = async (e)=>{
        e.preventDefault();
        try{
            await  axios.patch(`http://localhost:5000/words/edit/${id}`,{
							login,
							ingtext,
							rutext
            }); navigate("/words");
        } catch (error) {
            console.log(error);
        }

    };
    const getWordsById = async ()=>{
        const response = await axios.get(`http://localhost:5000/words/${id}`);
        setLogin(response.data.login);
        setIngtext(response.data.ingtext);
        setRutext(response.data.rutext);
				
    };

    return(
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateWord}>
                    <div className="field">
                        <label className="label">Theme:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={login}
                                   onChange={(e)=>setLogin(e.target.value)}
                                   placeholder="Theme"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">ingtext:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={ingtext}
                                   onChange={(e)=>setIngtext(e.target.value)}
                                   placeholder="ingtext"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">rutext:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={rutext}
                                   onChange={(e)=>setRutext(e.target.value)}
                                   placeholder="rutext"/>
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
export default EditWord;