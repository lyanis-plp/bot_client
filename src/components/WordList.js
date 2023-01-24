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


<div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to={`add`} className="button is-success">
            Add New
        </Link>
               <table className="table is-striped is-fullwidth">
                   <thead>
                        <tr>
                            <th>No</th>
                            <th>uuid</th> 
                            <th>inglish text</th>
                            <th>russian text</th>
														<th>Action</th>
                        </tr>
                   </thead>
                   <tbody>
                   {words.map((word, index) =>(
                       <tr key={word.id}>
                           <th>{index+1}</th>
                           <th>{word.login}</th>
													 <th>{word.ingtext}</th>
                           <th>{word.rutext}</th>
                           <th>
                               <Link to={`edit/${word.id}`} className="button is-small is-info">edit</Link>
                               <button onClick={()=>deleteWord(word.id)} className="button is-small is-danger">Delite</button>
                           </th>
                       </tr>

                   ))}

                   </tbody>
               </table>
    </div>
</div>
    )
}
export default WordList;