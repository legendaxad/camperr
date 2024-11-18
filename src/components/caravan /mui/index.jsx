import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import topCamperCaravans from './topCamperCaravans';
import { Secondsearch } from '../../motors';
const CamperCaravans = () => {
  return (
     <Secondsearch> <Autocomplete
      disablePortal
      options={topCamperCaravans}
      sx={{ width: 300, } }
      size='small'
     
      renderInput={(params) => <TextField {...params} label="caravan" />}
    /></Secondsearch>
  
  )
}

export default CamperCaravans