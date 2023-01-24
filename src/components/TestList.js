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
			<div>
				 <div className="head"> 
					<Link to={`add`} className="head__btn">Add New</Link>
					<h2>Inglish tests data</h2>
				</div>
			<div className="main flex-center">
					 
							 
										 
												 {tests.map((test, index) =>(
			
													<div className="post" key={test.id}>
													
														 
																 <h3>#{index+1} - {test.login}</h3>
																 <img src="./rigel.png" className="post__img" alt="rigel"/>
																 <p className="post__data">{test.quest}</p>
																 <p className="post__data">{test.conwa}</p>
																 <hr/>
																 <p className="post__data">1. {test.unswer1}</p>
																 <p className="post__data">2. {test.unswer2}</p>
																 <p className="post__data">3. {test.unswer3}</p>
																 <p className="post__data">4. {test.unswer4}</p>
																 <hr/>
																 <p className="post__data">правельный ответ <strong className="post__data_strong">{test.them}</strong></p>
																 <div className="post__btn">
																		 <Link to={`edit/${test.id}`} className="button">Edit</Link>
																		 <button onClick={()=>deleteTest(test.id)} className="button__danger">Delite</button>
																 </div>
														 
													</div>
												 ))}
			
												 
					 
			</div>
			</div>
					)
}
export default TestList;


// {tests.map((test, index) =>(
// 	<tr key={test.id}>
// 			<th>{index+1}</th>
// 			<th>{test.login}</th>
// 			<th>{test.quest}</th>
// 			<th>{test.conwa}</th>
// 			<th>{test.unswer1}</th>
// 			<th>{test.unswer2}</th>
// 			<th>{test.unswer3}</th>
// 			<th>{test.unswer4}</th>
// 			<th>{test.them}</th>
// 			<th>
// 					<Link to={`edit/${test.id}`} className="button is-small is-info">Edit</Link>
// 					<button onClick={()=>deleteTest(test.id)} className="button is-small is-danger">Delite</button>
// 			</th>
// 	</tr>

// ))}