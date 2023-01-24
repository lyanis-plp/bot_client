import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const AeroList = ()=>{
    const [aeros, setAeros] = useState([]);
    useEffect(() => { getAeros(); },[]);

    const getAeros = async  () => {
        const respons = await axios.get("http://localhost:5000/aeros");
        setAeros(respons.data);
    };

    const deleteAero = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/aeros/${id}`);
            getAeros();
        }catch (error){
            console.log(error)
        }
    };

    return(
			<div>
				 <div className="head"> 
					<Link to={`add`} className="head__btn">Add New</Link>
					<h2>Aerodinamic data</h2>
				</div>
			<div className="main flex-center">
					 
							 
										 
												 {aeros.map((aero, index) =>(
			
													<div className="post" key={aero.id}>
													
														 
																<h3>#{index+1} {aero.level}</h3>
																<img src="./rigel.png" className="post__img" alt="rigel"/>
																<p className="post__data">{aero.themData}</p>
																<p className="post__data">Возможно фото</p>
                          			<p className="post__data">Возможно аудио</p>
																 <div className="post__btn">
																		 <Link to={`edit/${aero.id}`} className="button">Edit</Link>
																		 <button onClick={()=>deleteAero(aero.id)} className="button__danger">Delite</button>
																 </div>
														 
													</div>
												 ))}
			
												 
					 
			</div>
			</div>
					)
}
export default AeroList;




