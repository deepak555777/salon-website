import {Box, TextField, Button,Grid,Paper} from "@mui/material"
import { React, useState, useRef } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import './Appointment.css'
import Selectchip from '../Components/Selectchip'
import AddTaskIcon from '@mui/icons-material/AddTask';
import emailjs from '@emailjs/browser';


const Appointment=()=>{
  const [toSend, setToSend] = useState({
    Fullname:'',
    Mobile:'',
    Gender:(''),
    Email:'',
    Note:'',
  })
  const [Date, setDate] = useState()
  const [Time, setTime] = useState()
  

   /* const [Fullname, setFullname] = useState('')
    const [Mobile, setMobile] = useState('');
    const [Gender, setGender] = useState();
    const [Time, setTime] = useState()
    const [Email, setEmail] = useState('')
    const [Date, setDate] = useState()
    const [Note, setNote] = useState()*/

    const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  emailjs.sendForm('service_fjn8wc6', 'template_82ofk7e',form.current, '84hAabCusrLLlnMq8')
  .then((response) => {
      console.log('SUCCESS!');
      alert("Booking Done");
  }, (error) => {
      console.log(error.text);
  });
}
const handleChange=(e)=>{
  setToSend({...toSend, [e.target.name]: e.target.value})
}
    return (
      
        <div className="main-container">  
        <div className="container">
          
        <form onSubmit={handleSubmit} ref={form} >
          <Paper >
          <Box padding={3} margintop={6} >
          <h2 className="text-center">Your Own Salon</h2>
        <Grid>
  <Grid sm={6}
>  <TextField  
  fullWidth
  margin="dense"
  id="outlined-size-small"
  variant="outlined"
  size="small"
  label="Fullname"
  name="Fullname"
  value={toSend.Fullname}
  required
  onChange={handleChange} 
  />
  </Grid>
  <Grid sm={6}>
  <TextField  
  fullWidth
  margin="dense"
  label="Mobile No" 
  id="outlined-size-small"
  variant="outlined"
  size="small"
  name="Mobile"
  value={toSend.Mobile}
  required
  onChange={handleChange}
  
   />
  </Grid>
  <Grid sm={6}>
  <TextField  
  fullWidth
  margin="dense"
  label="Email" 
  id="outlined-size-small"
  variant="outlined"
  size="small"
  name="Email"
  value={toSend.Email}
  onChange={handleChange}
  />
    </Grid>
    <Grid sm={6}>
 <Selectchip/>
 </Grid>

        <Grid sm={6}>
        <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          
          disablePast
          required
          id="datepicker"
          label="Choose Date"
          inputFormat="DD/MM/YYYY"
          value={Date}
          onChange={(newValue)=>{setDate(newValue)}}
          renderInput={(params) => <TextField 
           fullWidth
            margin="dense"
            id="outlined-size-small"
        
          variant="outlined"
          size="small"
            name="Date" 
             {...params} />}
        />
        </LocalizationProvider>
        </Grid>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid xs ={6}>
                <TimePicker
                
                id="timepicker"
                disablePast
          renderInput={(params) => <TextField 
            fullWidth
            margin="dense"
            id="outlined-size-small"
          variant="outlined"
          size="small"
            name="Time" {...params} />}
          value={Time}
          label="Choose Time"
          
          onChange={(newValue)=>{setTime(newValue)}}
          minTime={dayjs('2018-01-01T10:00')}
          maxTime={dayjs('2018-01-01T20:00')}
        />
        </Grid>
        </LocalizationProvider>
        

 <Grid xs={6}>
 <TextField
   margin="dense"
   fullWidth
  label="Special Note"
  id="outlined-size-small"
  variant="outlined"
  size="small"
  name="Note"
  value={toSend.Note}
  onChange={handleChange}
   />
 </Grid>
 </Grid>
 <div className="text-center">
 <Button startIcon ={<AddTaskIcon/>} type = "submit" variant="contained" margintop={2}> Book Now</Button>
 </div>
 </Box>
 </Paper>
    </form>
        </div>
   
        
        </div>
    )

}
export default Appointment;