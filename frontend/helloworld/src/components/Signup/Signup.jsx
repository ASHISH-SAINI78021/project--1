import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const Signup = () => {
  return (
    <div>
      <form action="http://localhost:8080/signup" method="post">
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="email@example.com" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="username" name="username" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" name="email"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="password" name="password" />
          </div>
        </div>
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
        Send
      </Button>
      </form>
    </div>
  );
};

export default Signup;
