import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const TestList = ()=>{
    const [tests, setTests] = useState([]);
    useEffect(() => { getTests(); },[]);

    const getTests = async  () => {
        const respons = await axios.get("http://localhost:5000/tests");
        setTests(respons.data);
    };

    const deleteTest = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/tests/${id}`);
            getTests();
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
                            <th>Theme</th>
                            <th>question</th>
                            <th>conwa text</th>
														<th>unswer1</th>
														<th>unswer2</th>
														<th>unswer3</th>
														<th>unswer4</th>
														<th>them</th>
                            <th>Action</th>
                        </tr>
                   </thead>
                   <tbody>
                   {tests.map((test, index) =>(
                       <tr key={test.id}>
                           <th>{index+1}</th>
                           <th>{test.login}</th>
													 <th>{test.quest}</th>
                           <th>{test.conwa}</th>
                           <th>{test.unswer1}</th>
													 <th>{test.unswer2}</th>
													 <th>{test.unswer3}</th>
													 <th>{test.unswer4}</th>
													 <th>{test.them}</th>
                           <th>
                               <Link to={`edit/${test.id}`} className="button is-small is-info">Edit</Link>
                               <button onClick={()=>deleteTest(test.id)} className="button is-small is-danger">Delite</button>
                           </th>
                       </tr>

                   ))}

                   </tbody>
               </table>
    </div>
</div>
    )
}
export default TestList;