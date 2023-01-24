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


<div className="columns mt-5 is-centered">
    <div className="column is-full">
        <Link to={`add`} className="button is-success">
            Add New
        </Link>
               <table className="table is-striped is-fullwidth">
                   <thead>
                        <tr>
                            <th>No</th>
														<th>level</th>
                            <th>themData</th> 
                            <th>imgData</th>
                            <th>audioData</th>
														<th>videoData</th>
														<th>Action</th>
                        </tr>
                   </thead>
                   <tbody>
                   {aeros.map((aero, index) =>(
                       <tr key={aero.id}>
                           <th>{index+1}</th>
                           <th>{aero.level}</th>
													 <th>{aero.themData}</th>
                           <th>{aero.imgData}</th>
                           <th>{aero.audioData}</th>
													 <th>{aero.videoData}</th>
													 <th>
                               <Link to={`edit/${aero.id}`} className="button is-small is-info">Edit</Link>
                               <button onClick={()=>deleteAero(aero.id)} className="button is-small is-danger">Delite</button>
                           </th>
                       </tr>

                   ))}

                   </tbody>
               </table>
    </div>
</div>
    )
}
export default AeroList;