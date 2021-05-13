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


class ClientsList extends React.Component {

    constructor(){
        super();
        this.state = {
            clienteNuevo: {name: '', lastname: '', identification: '', telephone: '', address: ''},
            clientes: [],
            status: null,
            open: null,
        }
    }

    handleOpen = () => {
        this.setState(
            {
                open: true
            }
        )
      };
    
       handleClose = () => {
        this.setState(
            {
                open: false
            }
        )
        this.getClients();
      };
    
       setNameClient = (event) => {
        var {clienteNuevo} = this.state;
        clienteNuevo.name = event.target.value;
        this.setState({
            clienteNuevo: clienteNuevo
        });
        
      }
    
       setLastNameClient = (event) => {
        var {clienteNuevo} = this.state;
        clienteNuevo.lastname = event.target.value;
        this.setState({
            clienteNuevo: clienteNuevo
        });
      }
    
       setIdentificationClient = (event) => {
        var {clienteNuevo} = this.state;
        clienteNuevo.identification = event.target.value
        this.setState({
            clienteNuevo: clienteNuevo
        });
       
      }
    
       setTelephoneClient = (event) => {
        var {clienteNuevo} = this.state;
        clienteNuevo.telephone = event.target.value
        this.setState({
            clienteNuevo: clienteNuevo
        });
        
      }
    
       setAddressClient = (event) => {
        var {clienteNuevo} = this.state;
        clienteNuevo.address = event.target.value
        this.setState({
            clienteNuevo: clienteNuevo
        });
        
      }
    
       addClient = ()=>{
           axios.post('http://localhost:8000/clients/',this.state.clienteNuevo).then((res) => {
               console.log(res);
           })
           this.handleClose();
          console.log(this.state.clienteNuevo);
      }

      componentWillMount(){
          this.getClients();
      }
      getClients = ()=> {
        axios.get("http://localhost:8000/clients/")
        .then(res => {
            this.setState({
                clients: res.data.results,
                status: 'success'
            });  
        })
      }
    render() {

        

         


        return (
            <div>
                <div >

{this.state.status === 'success' &&
    this.state.clients.map((client, i) => {
        return (
            <Cliente key={i} cliente = {client}/>
        )
    })
}

<IconButton onClick={this.handleOpen} color="black" aria-label="add client">
    <AddIcon />
  </IconButton>
  

  <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Agregar Nuevo Cliente</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Llenar los campos para agregar nuevo cliente
      </DialogContentText>
      <TextField
        onChange={this.setNameClient}
        autoFocus
        margin="dense"
        id="name"
        label="Nombre:"
        type="text"
        fullWidth
      />
      <TextField
        onChange={this.setLastNameClient}
        autoFocus
        margin="dense"
        id="lastname"
        label="Apellido:"
        type="text"
        fullWidth
      />
      <TextField
        onChange = {this.setIdentificationClient}
        autoFocus
        margin="dense"
        id="identification"
        label="Número de cédula:"
        type="text"
        fullWidth
      />
      <TextField
        onChange = {this.setTelephoneClient}
        autoFocus
        margin="dense"
        id="telephone"
        label="Teléfono:"
        type="text"
        fullWidth
      />

      <TextField
        onChange = {this.setAddressClient}
        autoFocus
        margin="dense"
        id="address"
        label="Dirección:"
        type="text"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={this.handleClose} color="primary">
        Cancelar
      </Button>
      <Button onClick={this.addClient} color="primary">
        Añadir
      </Button>
    </DialogActions>
  </Dialog>
  
  
</div>

            </div>
        )
    }
}
export default ClientsList;


