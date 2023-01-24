import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


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
                   {sims.map((sim, index) =>(
                       <tr key={sim.id}>
                           <th>{index+1}</th>
                           <th>{sim.level}</th>
													 <th>{sim.themData}</th>
                           <th>{sim.imgData}</th>
                           <th>{sim.audioData}</th>
													 <th>{sim.videoData}</th>
													 <th>
                               <Link to={`edit/${sim.id}`} className="button is-small is-info">Edit</Link>
                               <button onClick={()=>deleteSim(sim.id)} className="button is-small is-danger">Delite</button>
                           </th>
                       </tr>

                   ))}

                   </tbody>
               </table>
    </div>
</div>
    )
}
export default SimList;