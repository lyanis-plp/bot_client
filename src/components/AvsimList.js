import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
//import styes from "./styleComponent.module.css";


const SimList = ()=>{
    const [sims, setSims] = useState([]);
    useEffect(() => { getSims(); },[]);

    const getSims = async  () => {
        const respons = await axios.get("http://localhost:5000/sims");
        setSims(respons.data);
    };

    const deleteSim = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/sims/${id}`);
            getSims();
        }catch (error){
            console.log(error)
        }
    };

    return(
<div>
 	<div className="head"> 
		<Link to={`add`} className="head__btn">Add New</Link>
		<h2>Avia simulation data</h2>
	</div>
<div className="main flex-center">
     
         
               
                   {sims.map((sim, index) =>(

										<div className="post" key={sim.id}>
										
                       
                           <h3>#{index+1} {sim.level}</h3>
                           <img src="./rigel.png" className="post__img" alt="rigel"/>
													 <p className="post__data">{sim.themData}</p>
													 <p className="post__data">Возможно фото</p>
                           <p className="post__data">Возможно аудио</p>
													 <p className="post__data">Возможно видео</p>
													 <div className="post__btn">
                               <Link to={`edit/${sim.id}`} className="button">Edit</Link>
                               <button onClick={()=>deleteSim(sim.id)} className="button__danger">Delite</button>
                           </div>
                       
										</div>
                   ))}

                   
     
</div>
</div>
    )
}
export default SimList;