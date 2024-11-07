import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import DialogActions from "@mui/material/DialogActions";



import ResolucionSection from '../../../../../components/ResolucionSection';


const buttonStyles = {
  backgroundColor: 'darkblue',
  color: 'white',
  '&:hover': { backgroundColor: 'blue' },
};


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  High: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RegistrarAntecedentesApelacion = () => {

  const [showResolutionInfo, setShowResolutionInfo] = React.useState(false);
  const [showResolutionInfo2, setShowResolutionInfo2] = React.useState(false);
  const [showResolutionInfo3, setShowResolutionInfo3] = React.useState(false);
  const [showResolutionInfo4, setShowResolutionInfo4] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => {
    // Lógica para guardar el documento desde el editor
    console.log('Documento editado guardado');
    setOpen(false);
  };
  const [profesional, setProfesional] = React.useState('');

  const handleChange = (event) => {
    setProfesional(event.target.value);
  };

  const handleSendResolution = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResolutionInfo2(true);
    }, 1000);
  };

const handleSendResolution2 = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    setShowResolutionInfo4(true);
  }, 1000);
};


  const handleChangeChk = (event) => {  
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const [state, setState] = React.useState({
    chkItem1: false,
    chkItem2: false,
    chkItem3: false, 
    chkItem4: false,
    chkItem5: false,
  });
  
  const handleGrouping = (e) => {
  setState({
     ...state,
     [e.target.name]: e.target.checked,
  });
  };

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalSave = () => {
    // Lógica para guardar el documento desde el editor
    console.log('Documento editado guardado');
    setModalOpen(false);
    setShowResolutionInfo(true);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  }; 

  return (
    <div>
      <section>
        <Button onClick={handleOpen}>
          <p style={{ marginLeft: "0%" }}>Solicitar Medida Mejor Resolver</p>
          <EditIcon></EditIcon>
        </Button>
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Ingresar Resolución
        </Typography>
        <ResolucionSection
            showResolutionInfo={showResolutionInfo}
            setShowResolutionInfo={setShowResolutionInfo}
            showResolutionInfo2={showResolutionInfo2}
            setShowResolutionInfo2={setShowResolutionInfo2}
            handleSendResolution={handleSendResolution}
            buttonStyles={buttonStyles}
          />
                    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Ingresar Oficio
          </Typography>

          <ResolucionSection
            showResolutionInfo={showResolutionInfo3}
            setShowResolutionInfo={setShowResolutionInfo3}
            showResolutionInfo2={showResolutionInfo4}
            setShowResolutionInfo2={setShowResolutionInfo4}
            handleSendResolution={handleSendResolution2}
            buttonStyles={buttonStyles}
          />


      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            MEDIDAS MEJOR RESOLVER
          </Typography>

          <FormControl variant="outlined">
  <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
  <Select
    native
    value={age}
    onChange={handleChange}
    label="Age"
    inputProps={{ name: 'age', id: 'outlined-age-native-simple'}}
    >
	    <option aria-label="None" value="" />
	    <option value={10}>Ten</option>
	    <option value={20}>Twenty</option>
	    <option value={30}>Thirty</option>
	 </Select>
</FormControl>

          <div style={{ margin: "5%" }}>
          <FormControlLabel
              control={
                <Checkbox name="opcion1" />
              }
              label="Solicitar Informacion complementaria del reclamante-reclamado"
          />
          <FormControlLabel
              control={
                <Checkbox name="opcion2" />
              }
              label="Solicitar audios"
          />
          <FormControlLabel
              control={
                <Checkbox name="opcion3" />
              }
              label="Coordinar y/o gestiones de la DR"
          />
          <FormControlLabel
              control={
                <Checkbox name="opcion4" />
              }
              label="Adjuntar expediente escaneado"
          />
          <FormControlLabel
              control={
                <Checkbox name="opcion5" />
              }
              label="Otra"
          />




    </div>
   

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="edit-container">

              <input type="text" />
              <label for="">Edit Contact Email</label>
              <input type="text" />
              <label for="">Edit Contact Image</label>
              <input type="file" />
            </div>

            <button class="edit-btn">Save</button>
          </Typography>
            <MenuItem value="" disabled>
              Seleccione Profesional
            </MenuItem>
            <MenuItem value="1">SANDRA EUGENIA JELVES MELLA</MenuItem>
            <MenuItem value="2">HELEN ANDREA THIERS HERNANDEZ</MenuItem>
            <MenuItem value="3">JORGE IVAN GASPONOV ESCUDERO</MenuItem>
            <MenuItem value="4">CLAUDIO PEREZ GARCIA</MenuItem>
            <MenuItem value="1">PATRICIO LEONARDO SANZANA MANSILLA</MenuItem>
            <MenuItem value="2">MARCELO EDUARDO GRANDON PELLET</MenuItem>
            <MenuItem value="3">PETER SHARP VARGAS</MenuItem>
            


        </Box>
      </Modal>
    </div>
  );
  };
export default RegistrarAntecedentesApelacion;