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
        
<div> 
		<div className="head"> 
					<Link to={`/words`} className="head__btn">Words</Link>
					<h2>Add words</h2>
		</div>

			<div className="main flex-center">
			<div className="post__form"> 
			<h3>Adding words</h3>
																 <img src="../rigel.png" className="post__img" alt="rigel"/>
			<form onSubmit={seveWord}>
                    <div className="field">
                        <label className="post__label">К какой теме относится:</label>
                        <div className="post__control">
                            <input type="text"
                                   className="input"
                                   value={login}
                                   onChange={(e)=>setLogin(e.target.value)}
                                   placeholder="тема"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="post__label">Текст на английском:</label>
                        <div className="post__control">
                            <input type="text"
                                   className="input"
                                   value={ingtext}
                                   onChange={(e)=>setIngtext(e.target.value)}
                                   placeholder="Текст"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="post__label">Текст на русском:</label>
                        <div className="post__control">
                             
														 <input type="text"
                                  className="input"
                                  value={rutext}
                                  onChange={(e)=>setRutext(e.target.value)}
																	placeholder="Текст"/>
                                     
                                 
                             
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button">Сохранить</button>
                    </div>
                </form>
								</div>


			</div>

</div>






    )
}
export default AddWord;



{/* <form onSubmit={seveWord}>
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
                </form> */}





