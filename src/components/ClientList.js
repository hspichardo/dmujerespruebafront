import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Cliente from './Cliente';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));


export default function ClientList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [clienteNuevo, setClienteNuevo] = React.useState({
      name: "",
      lastname: "",
      identification: "",
      telephone: "",
      address: ""
  });

  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setNameClient = (event) => {
    clienteNuevo.name = event.target.value
  }

  const setLastNameClient = (event) => {
    clienteNuevo.lastname = event.target.value
  }

  const setIdentificationClient = (event) => {
    clienteNuevo.identification = event.target.value
  }

  const setTelephoneClient = (event) => {
    clienteNuevo.telephone = event.target.value
  }

  const setAddressClient = (event) => {
    clienteNuevo.address = event.target.value
  }

  const addClient = ()=>{
      console.log(clienteNuevo);
  }

  const [clients,status, setClients, setStatus] = useState([], false);
  axios.get("http://localhost:8000/clients/")
  .then(res => {
      setClients({
          clients: res.data.results
      });
      setStatus(true);

      
  })
  

  return (

    
    <div className={classes.root}>

    {status &&
        clients.map((client, i) => {
            return (
                <Cliente key={i} cliente = {client}/>
            )
        })
    }

    <IconButton onClick={handleOpen} color="black" aria-label="add client">
        <AddIcon />
      </IconButton>
      

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregar Nuevo Cliente</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Llenar los campos para agregar nuevo cliente
          </DialogContentText>
          <TextField
            onChange={setNameClient}
            autoFocus
            margin="dense"
            id="name"
            label="Nombre:"
            type="text"
            fullWidth
          />
          <TextField
            onChange={setLastNameClient}
            autoFocus
            margin="dense"
            id="lastname"
            label="Apellido:"
            type="text"
            fullWidth
          />
          <TextField
            onChange = {setIdentificationClient}
            autoFocus
            margin="dense"
            id="identification"
            label="Número de cédula:"
            type="text"
            fullWidth
          />
          <TextField
            onChange = {setTelephoneClient}
            autoFocus
            margin="dense"
            id="telephone"
            label="Teléfono:"
            type="text"
            fullWidth
          />

          <TextField
            onChange = {setAddressClient}
            autoFocus
            margin="dense"
            id="address"
            label="Dirección:"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={addClient} color="primary">
            Añadir
          </Button>
        </DialogActions>
      </Dialog>
      
      
    </div>

    
  );
}
