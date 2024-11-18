import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import sortByUsedCamperOptions from './topCamperCars';
import { Secondsearch } from '../../motors';
const ByUsedCamperOptions = () => {
  return (
     <Secondsearch> <Autocomplete
      disablePortal
      options={sortByUsedCamperOptions}
      sx={{ width: 300, } }
     size='small'
      renderInput={(params) => <TextField {...params} label="used cars" />}
    /></Secondsearch>
  
  )
}

export default ByUsedCamperOptions