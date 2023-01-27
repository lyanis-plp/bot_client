import {BrowserRouter, Routes, Route} from "react-router-dom";

import MainList from "./components/MainList";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

import WordList from "./components/WordList";
import AddWord from "./components/AddWord";
import EditWord from "./components/EditWord";

import AvsimList from "./components/AvsimList";
import AddSim from "./components/AddSim";
import EditSim from "./components/EditSim";

import AeroList from "./components/AeroList";
import AddAero from "./components/AddAero";
import EditAero from "./components/EditAero";

import TestList from "./components/TestList";
import FrazeList from "./components/FrazeList";

function App() {
  return (
    <BrowserRouter>
        <Routes>
				    <Route path="/" element={<MainList/>}/>

            <Route path="/users" element={<UserList/>}/>
						<Route path="/users/add" element={<AddUser/>}/>
            <Route path="users/edit/:id" element={<EditUser/>}/>

						<Route path="/words" element={<WordList/>}/>
						<Route path="/words/add" element={<AddWord/>}/>
						<Route path="/words/edit/:id" element={<EditWord/>}/>

						<Route path="/sims" element={<AvsimList/>}/>
						<Route path="/sims/add" element={<AddSim/>}/>
						<Route path="/sims/edit/:id" element={<EditSim/>}/>

						<Route path="/aeros" element={<AeroList/>}/>
						<Route path="/aeros/add" element={<AddAero/>}/>
						<Route path="/aeros/edit/:id" element={<EditAero/>}/>

						<Route path="/tests" element={<TestList/>}/>
						<Route path="/frazes" element={<FrazeList/>}/>
						 
						 
             
        </Routes>
    </BrowserRouter>


  );
}

export default App;
