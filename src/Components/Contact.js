import React from 'react'
import './Contact.css'
import {Stack, Typography} from '@mui/material'

function Contact() {
    
  return (
    
    <div class="container2">
      
        <div className="overlay">
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1918351580553!2d-73.67299528529566!3d45.52634503731706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9185e0ef47db3%3A0xad5ff0fdeb7f2d9!2s395%20Blvd.%20Cote-Vertu%20Ouest%2C%20Saint-Laurent%2C%20QC!5e0!3m2!1sen!2sca!4v1673392087655!5m2!1sen!2sca"
         width="90%"
         height="300vh" 
         style={{border:0}} 
         allowFullscreen=""
         title="Salon"
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        

       
        </div>
        <div class="stack">
        <Stack
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 10, sm: 10, md: 20, lg:20 }}
        direction={{ xs: 'row', sm: 'row', lg:'row'}}
        >
        <Typography variant="body1"><h2 >Timing</h2>
       
Tuesday	Closed<br></br>
Wednesday	(10a.m.–8p.m.)<br></br>
Thursday	(10a.m.–8p.m.)<br></br>
Friday	(10a.m.–8p.m.)<br></br>
Saturday	(10a.m.–8p.m.)<br></br>
Sunday	(10a.m.–8p.m.)<br></br>
Monday	(10a.m.–8p.m.)</Typography>
<Typography variant="body1" >Phone No (438) 855-5777
       </Typography>
       <Typography variant="body1" >Location<br></br>
      395 Boul Cote Vertu<br></br>Montréal(QC) <br></br>H4N 1E6 </Typography>
</Stack>
</div>
        </div>
        
    </div>
    
  )
}

export default Contact