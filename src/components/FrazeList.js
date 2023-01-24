import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const FrazeList = ()=>{
    const [frazes, setFrazes] = useState([]);
    useEffect(() => { getFrazes(); },[]);

    const getFrazes = async  () => {
        const respons = await axios.get("http://localhost:5000/frazes");
        setFrazes(respons.data);
    };

    const deleteFraze = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/frazes/${id}`);
            getFrazes();
        }catch (error){
            console.log(error)
        }
    };

    return(
			<div>
				 <div className="head"> 
					<Link to={`add`} className="head__btn">Add New</Link>
					<h2>Inglich audio text data</h2>
				</div>
			<div className="main flex-center">
					 
							 
										 
												 {frazes.map((fraze, index) =>(
			
													<div className="post" key={fraze.id}>
													
														 
																 <h3>#{index+1} - {fraze.login}</h3>
																 <img src="./rigel.png" className="post__img" alt="rigel"/>
																 <p className="post__data">{fraze.ingtext}</p>
																 <p className="post__data">{fraze.rutext}</p>
																 <p className="post__data">Возможно аудио</p>
																 <p className="post__data">{fraze.theame}</p>
																 <div className="post__btn">
																		 <Link to={`edit/${fraze.id}`} className="button">Edit</Link>
																		 <button onClick={()=>deleteFraze(fraze.id)} className="button__danger">Delite</button>
																 </div>
														 
													</div>
												 ))}
			
												 
					 
			</div>
			</div>
					)
}
export default FrazeList;


// {frazes.map((fraze, index) =>(
// 	<tr key={fraze.id}>
// 			<th>{index+1}</th>
// 			<th>{fraze.login}</th>
// 			<th>{fraze.ingfraze}</th>
// 			<th>{fraze.ingtext}</th>
// 			<th>{fraze.rutext}</th>
// 			<th>{fraze.theame}</th>
// 			<th>
// 					<Link to={`edit/${fraze.id}`} className="button is-small is-info">Edit</Link>
// 					<button onClick={()=>deleteFraze(fraze.id)} className="button is-small is-danger">Delite</button>
// 			</th>
// 	</tr>

// ))}