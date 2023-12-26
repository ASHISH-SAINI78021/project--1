import {BrowserRouter , Routes , Route, Router} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Main from "./components/Main/Main"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styles from "./App.module.css"
import Footer from "./components/Footer/Footer";
import Text from "./components/Text/Text";
import All from "./components/All/All";
import { useState } from "react";
import Signup from "./components/Signup/Signup";

function App() {
  const [data , setdata] = useState(null);
  const [id , setid] = useState("6582c4486d83d3c020d7a0ec");
  const getId = ()=> {
    return ;
  }
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route exact path='/signup' element={<Signup/>}></Route>
            <Route path="/:id" element={<Main Data={data}/>}></Route>
            <Route path="*" element={<All/>}></Route>
        </Routes>
        <Footer Data={setdata}></Footer>
        
      </BrowserRouter>
    </div>
  )
}

export default App
