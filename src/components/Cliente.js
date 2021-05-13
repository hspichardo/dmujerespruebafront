import React, { Component } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function Cliente(props) {
  
      const classes = useStyles();
      const [open, setOpen] = React.useState(false);
      const [clienteMostar, setClienteMostrar] = React.useState({name: '', lastname: '', identification: '', telephone: '', address: ''});
      const [status, setStatus] = React.useState(null);
        const handleOpen = () => {
            setOpen(true);
          };
        
          const handleClose = () => {
            setOpen(false);
          };
      
       
      
        const cliente = props.cliente;
        console.log(cliente);
        return (
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>{cliente.name + " " + cliente.lastname}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <Button  onClick={handleOpen} variant="outlined">Ver más</Button>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p>Nombre: {cliente.name} </p>
            <p>Apellido: {cliente.lastname} </p>
            <p>Cédula: {cliente.identification} </p>
            <p>Teléfono: {cliente.telephone} </p>
            <p>Dirección: {cliente.address} </p>

          </div>
        </Fade>
      </Modal>
            </div>
        )
    }