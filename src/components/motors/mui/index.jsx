import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import topCamperCars from './topCamperCars';
import { Secondsearch } from '../../motors';
const Motorssearch = () => {
  return (
     <Secondsearch> <Autocomplete
      disablePortal
      options={topCamperCars}
      sx={{ width: 300, } }
     size='small'
      renderInput={(params) => <TextField {...params} label="motors" />}
    /></Secondsearch>
  
  )
}

export default Motorssearch