import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,Link
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Employ = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 580,
    margin: "20px auto",
  };
  let navigate = useNavigate();
  const handleSubmit = () => {

navigate("/");
  };
  return (
    <Card style={{ maxWidth: 700, margin: "0 auto", padding: "20px 34px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Employ Details
        </Typography>
        <Typography
          gutterBottom
          color="textSecondary"
          variant="body2"
          component="p"
        >
          
        </Typography>
        <form>
          <Grid>
            <Grid xs={22} sm={6} item>
              <TextField
                label="First Name"
                placeholder="Enter first name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              label="Last Name"
              placeholder="Enter last name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={22} sm={6} item>
            <TextField
              type="email"
              label="Email Address"
              placeholder="Enter email address"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={22} sm={6} item>
            <TextField
              type="number"
              label="Phone"
              placeholder="Enter phone number"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          
          <Grid xs={22} sm={6} item>
            <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
          <Typography>

          <Link href="/form">Contact Us</Link>

        </Typography>
        </form>
      </CardContent>
    </Card>
  );
};

export default Employ;
