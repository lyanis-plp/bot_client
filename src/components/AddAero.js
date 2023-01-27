import React, {useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"

const AddAero = ()=>{
    const [level,setLevel] = useState("");
    const [themData,setThemData] = useState("");
    const [imgData,setImgData] = useState("");
		const [audioData,setAudioData] = useState("");
		const [videoData,setVideoData] = useState("");
    const navigate = useNavigate();

    const seveAero = async (e)=>{
        e.preventDefault();
            try{
                await  axios.post('http://localhost:5000/aeros',{
									level,
									themData,
									imgData,
									audioData,
									videoData
                }); navigate("/aeros");
            } catch (error) {
                console.log(error);
            }

    }

    return(
		<div> 
			<div className="head"> 
						<Link to={`/aeros`} className="head__btn">Aerodinamic</Link>
						<h2>Add Aerodinamic them</h2>
			</div>
	
			<div className="main flex-center">
				<div className="post__form"> 
					<h3>Adding Aerodinamic them</h3>
					<img src="../rigel.png" className="post__img" alt="rigel"/>
					<form onSubmit={seveAero}>
                    <div className="field">
                        <label className="post__label">Название темы:</label>
                        <div className="post__control">
                            <input type="text"
                                   className="input"
                                   value={level}
                                   onChange={(e)=>setLevel(e.target.value)}
                                   placeholder="название темы"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="post__label">Текст темы:</label>
                        <div className="post__control">
												<textarea rows="10" cols="45"
                                   className="input"
                                   value={themData}
                                   onChange={(e)=>setThemData(e.target.value)}
                                   placeholder="конва темы"></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label className="post__label">Телеграм код фотографии:</label>
                        <div className="post__control">
														<input type="text"
                                   className="input"
                                   value={imgData}
                                   onChange={(e)=>setImgData(e.target.value)}
                                   placeholder="код фотографии"/>
                        </div>
                    </div>
										<div className="field">
                        <label className="post__label">Телеграм код аудиоролика:</label>
                        <div className="post__control">
														<input type="text"
                                   className="input"
                                   value={audioData}
                                   onChange={(e)=>setAudioData(e.target.value)}
                                   placeholder="код аудиоролика"/>
                        </div>
                    </div>
										<div className="field">
                        <label className="post__label">Телеграм код видеоролика:</label>
                        <div className="post__control">
														<input type="text"
                                   className="input"
                                   value={videoData}
                                   onChange={(e)=>setVideoData(e.target.value)}
                                   placeholder="код видеоролика"/>
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">Сохранить</button>
                    </div>
                </form>      

        </div>
      </div>
		</div>
    )
}
export default AddAero;

{/* <form onSubmit={seveAero}>
                    <div className="field">
                        <label className="label">Level:</label>
                        <div className="control">
                            <input type="text"
                                   className="input"
                                   value={level}
                                   onChange={(e)=>setLevel(e.target.value)}
                                   placeholder="level"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">ThemData:</label>
                        <div className="control">
												<textarea rows="10" cols="45"
                                   className="input"
                                   value={themData}
                                   onChange={(e)=>setThemData(e.target.value)}
                                   placeholder="themData"></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">ImgData:</label>
                        <div className="control">
														<input type="text"
                                   className="input"
                                   value={imgData}
                                   onChange={(e)=>setImgData(e.target.value)}
                                   placeholder="imgData"/>
                        </div>
                    </div>
										<div className="field">
                        <label className="label">AudioData:</label>
                        <div className="control">
														<input type="text"
                                   className="input"
                                   value={audioData}
                                   onChange={(e)=>setAudioData(e.target.value)}
                                   placeholder="audioData"/>
                        </div>
                    </div>
										<div className="field">
                        <label className="label">VideoData:</label>
                        <div className="control">
														<input type="text"
                                   className="input"
                                   value={videoData}
                                   onChange={(e)=>setVideoData(e.target.value)}
                                   placeholder="videoData"/>
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">Save</button>
                    </div>
                </form> */}