import { TextField, Grid, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";


function ContactMe() {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ message, setMessage ] = useState("")
    const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    function nameChanged(event) {
        setName(event.target.value)
    }

    function emailChanged(event) {
        setEmail(event.target.value)
    }

    function messageChanged(event) {
        setMessage(event.target.value)
    }

    const submitContact = () => {
        fetch("https://docs.google.com/forms/d/e/1FAIpQLSeWR42dKVM75GTear98wPtpBoSOqZvhjN6JOBI941y-aXXhSg/formResponse?" + "entry.1435185150=" + name + "&entry.1211013790=" + email + "&entry.239176725=" + message, {
            method: "POST"
        })
        setOpen(true)
    }

    return(
            <Grid container spacing={3} flexDirection={"column"}>
                <Grid item>
                <TextField id="name" variant="outlined" label="Name" fullWidth value={name} onChange={nameChanged}/>
                </Grid>
                <Grid item>
                <TextField id="email" variant="outlined" label="Email" fullWidth value={email} onChange={emailChanged}/>
                </Grid>
                <Grid item>
                <TextField id="message" variant="outlined" label="Message" rows={4} fullWidth multiline value={message} onChange={messageChanged}/>
                </Grid>
                <Grid item><Button variant="contained" color="primary" size="small" onClick={() => submitContact()}>Submit</Button></Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Message Sent Successfully!
                </Alert>
      </Snackbar>
            </Grid>            
    )
};

export default ContactMe;