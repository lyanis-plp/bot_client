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


<div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to={`add`} className="button is-success">
            Add New
        </Link>
               <table className="table is-striped is-fullwidth">
                   <thead>
                        <tr>
                            <th>No</th>
                            <th>login</th>
                            <th>ingfraze</th>
														<th>ingtext</th>
														<th>rutext</th>
														<th>theame</th>
                            <th>Action</th>
                        </tr>
                   </thead>
                   <tbody>
                   {frazes.map((fraze, index) =>(
                       <tr key={fraze.id}>
                           <th>{index+1}</th>
                           <th>{fraze.login}</th>
													 <th>{fraze.ingfraze}</th>
                           <th>{fraze.ingtext}</th>
                           <th>{fraze.rutext}</th>
													 <th>{fraze.theame}</th>
                           <th>
                               <Link to={`edit/${fraze.id}`} className="button is-small is-info">Edit</Link>
                               <button onClick={()=>deleteFraze(fraze.id)} className="button is-small is-danger">Delite</button>
                           </th>
                       </tr>

                   ))}

                   </tbody>
               </table>
    </div>
</div>
    )
}
export default FrazeList;