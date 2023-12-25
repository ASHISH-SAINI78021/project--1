import React, { useEffect, useState } from 'react'
import styles from "./Main.module.css"
const URL = "http://localhost:8080/"

const Main = ({Data}) => {
  const [data , setdata] = useState([]);
  const [data1 , setdata1] = useState([]);
  useEffect(()=> {
    const handleMain = async()=> {
      const response = await fetch("http://localhost:8080/");
      
  
      if (response.ok){
        const users = await response.json();
        setdata(users);
      }
    }

    const renderData = async()=> {
      const response = await fetch("http://localhost:8080/6584293fd618dae4698135c0");
      if (response.ok){
        const json = await response.json();
        // console.log(json);

       setdata1((prevdata)=> {
        return [json];
       });
      }
    }
   
    handleMain();
    renderData();
    
  } , []);

  console.log(data1[0]);
  return (
    <div className={styles.main} >
        {
          (Data) ? Data : data1[0]?.map((value)=> {return <div key={value._id}>{value.text}</div>})
        }
    </div>
    
  )
}

export default Main
