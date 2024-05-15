import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ServiciosOpciones() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: '#ffffff' }} >Servicios</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Servicios"
          onChange={handleChange}
          sx={{ color: '#ffffff' }}
        >
          <MenuItem ><a href='/'>Transporte De Carga Local y Nacional</a></MenuItem>
          <MenuItem ><a href='/'>Transporte De Carga Internacional</a></MenuItem>
          <MenuItem><a href='/'>Transporte en Camabaja</a></MenuItem>
          <MenuItem><a href='/'>Transporte de Carga Peligrosa Y/O Fiscalizada</a></MenuItem>
          <MenuItem><a href='/'>Mudanzas</a></MenuItem>
          <MenuItem><a href='/'>Embalaje</a></MenuItem>
        </Select>
      </FormControl>
    </Box>



  );
}