import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const WordList = ()=>{
    const [words, setWords] = useState([]);
    useEffect(() => { getWords(); },[]);

    const getWords = async  () => {
        const respons = await axios.get("http://localhost:5000/words");
        setWords(respons.data);
    };

    const deleteWord = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/words/${id}`);
            getWords();
        }catch (error){
            console.log(error)
        }
    };

    return(
			<div>
				 <div className="head"> 
					<Link to={`add`} className="head__btn">Add New</Link>
					<h2>Inglish dictionary data</h2>
				</div>
			<div className="main flex-center">
					 
							 
										 
												 {words.map((word, index) =>(
			
													<div className="post" key={word.id}>
													
														 
																 <h3>#{index+1} {word.level}</h3>
																 <img src="./rigel.png" className="post__img" alt="rigel"/>
																 <p className="post__data">{word.ingtext}</p>
																 <p className="post__data">{word.rutext}</p>
																 <p className="post__data">Возможно аудио</p>
																 <div className="post__btn">
																		 <Link to={`edit/${word.id}`} className="button">Edit</Link>
																		 <button onClick={()=>deleteWord(word.id)} className="button__danger">Delite</button>
																 </div>
														 
													</div>
												 ))}
			
												 
					 
			</div>
			</div>
					)
}
export default WordList;



// {words.map((word, index) =>(
// 	<tr key={word.id}>
// 			<th>{index+1}</th>
// 			<th>{word.login}</th>
// 			<th>{word.ingtext}</th>
// 			<th>{word.rutext}</th>
// 			<th>
// 					<Link to={`edit/${word.id}`} className="button is-small is-info">edit</Link>
// 					<button onClick={()=>deleteWord(word.id)} className="button is-small is-danger">Delite</button>
// 			</th>
// 	</tr>

// ))}