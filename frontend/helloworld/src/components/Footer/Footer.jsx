import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import styles from "./Footer.module.css"

const Footer = ({Data}) => {
  const [row , setrow] = useState(1);
  const [data , setdata] = useState(null);

  const handleTextField = (event)=> {
    if (event.target.value && event.targetvalue != ""){
      setrow(2);
      Data(event.target.value);
      setdata(event.target.value);
    }
    else{
      setrow(1);
      Data(null);
      setdata("");
    }
  }
  const handleSubmit = async(event)=> {
    // event.preventDefault();
    Data(null);
    setdata("");
    handleTextField(event);
    const data1 = {
      text : data
    }
    console.log(data1);
    const response = await fetch("http://localhost:8080/6584293fd618dae4698135c0" , {
      headers: {
        'Content-Type': 'application/json',
      },
      method : "POST" ,
      body : JSON.stringify(data1)
    })
    .then((res)=> {
      res.json();
    })
    .then((data)=> {
      console.log(data);
    })
    .catch((err)=> {
      console.log(err);
    })
  }
  const buttonDelete = async()=> {
      const response = await fetch("http://localhost:8080/6584293fd618dae4698135c0" , {
        method : "DELETE"
      }).then((res)=> {
        console.log(res);
      }).catch((err)=> {
        console.log(err);
      })
  }
  return (
    <div>
        <div className={styles.container}>
          <div>
          <form onSubmit={()=> handleSubmit(event)} className={styles.form}>
            <TextField
              id="outlined-multiline-static"
              label="Write something great"
              multiline
              rows={row}
              defaultValue={""}
              value={data}
              onChange={()=> handleTextField(event)}
            />
            <Button variant="contained" type="submit" className={styles.button}>Submit</Button>
            <Button variant="contained" type="submit" className={styles.button} onClick={buttonDelete}>Delete </Button>
          </form>
          
          </div>
        </div>
       <footer className={styles.footer}>
          hey , i am footer
       </footer>
    </div>
  )
}

export default Footer
