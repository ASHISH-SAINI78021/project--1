import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "./Login.module.css";

// importing button
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function MultilineTextFields() {
    const [data, setdata] = useState("");  
    const handleTextField = (event) => {
        const { value } = event.target;  
        return setdata(value); 
    };
    const handleSubmit = async(event)=> {
        event.preventDefault();
        setdata("");
        const addData = data;
        let res = await fetch("http://localhost:8080/" , {
            method : "POST" ,
            body : JSON.stringify(data) ,
            headers: {
                "Content-Type" : "application/json" ,
            }
        });
        

    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            className={styles.login}
        >
            <form onSubmit={handleSubmit}>
                <label htmlFor="filled-textarea">Enter something</label>
                <TextField
                    id="filled-textarea"
                    label="eg:- Namaste India"
                    placeholder=""
                    variant="filled"
                    name="text"
                    value={data}
                    onChange={handleTextField}
                />
                <Button 
                    variant="contained" 
                    endIcon={<SendIcon />} 
                    type="submit"
                    onClick={handleSubmit}                
                >
                    submit
                </Button>
            </form>
        </Box>
    );
}
