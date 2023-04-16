import React, { Component,useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Avatar, Button, Grid, Paper, TextField, Typography,  Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avtarStyle = { backgroundcolor: "green" };
   let navigate = useNavigate();

  const handleSignIn = () => {
    if(password==="1234"){
      navigate("/employ");
    }

else{
     alert("password incorrect!");

}

  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          {/* <Avatar style={avtarStyle}>LockOutlinedIcon</Avatar> */}
          <LockOutlinedIcon/>
          <h2> Sign In </h2>
        </Grid>
        <TextField
          label="Usename"
          placeholder="Enter username"
          fullWidth
          required
          style={{margin:'4px'}}
      onChange={(e) => setusername(e.target.value)}
        />

        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          style={{margin:'3px'}}
          onChange={(e) => setpassword(e.target.value)}
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          
        </FormGroup>
        <Button type='submit'color='primary'  variant="contained" onClick={handleSignIn}>Sign In</Button>
        <Typography>
        <Link href="#">
             Forgot password?  
        </Link>
        </Typography>
        <Typography> Do you have an account?
        <Link href="#">
             Sign up
        </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
