import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BeforeDiv, BigSeconddiv, CarinTab, Lasttabdiv, MAInrevie, MainReview, MiddleReview, SecondMiddle, SecondTab } from './tabstyle';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import topCamperCars from './topCamperCars';
// import { useParams } from 'react-router-dom';

import Location from '../../assets/Screenshot_1 1.svg'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { usedVehicles } from '../mock/usedcar';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Usedcartabs() {

   
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
     <Box sx={{ borderBottom: 1, borderColor: 'divider' ,
      backgroundColor: ' rgba(0, 109, 171, 0.20)',
      '& .MuiTab-root': { color: 'black' },
      '& .Mui-selected': { color: 'white' ,background: 'var(--blue, #006DAB)'} // Color for the selected tab
 
      }}>
        <Tabs  value={value}
          onChange={handleChange}
        
          textColor="inherit"
          variant="scrollable"
          centered={false}
          aria-label="full width tabs example">
          <Tab label="Item reviews" {...a11yProps(0)}sx={{ width: 170, marginLeft: '4%' }} />
          <Tab label="Q&A" {...a11yProps(1)} sx={{ width: 170 }} />
          <Tab label="FAQ" {...a11yProps(2)}  sx={{ width: 170 }}/>
          <Tab label="Contact" {...a11yProps(3)} sx={{ width: 170 }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <MainReview>
            <MAInrevie><p>Premium Review <span>35</span></p> </MAInrevie>
            <Autocomplete
      disablePortal
      options={topCamperCars}
      sx={{ width: 177 }}
      size={"small"}
      renderInput={(params) => <TextField {...params}  />}
    />
    
        </MainReview>
       <MiddleReview>
       
       {
      usedVehicles.map((value , Hmenu)=>{
            return (
                 
                   
                  <div><div><CarinTab>
                        <div><img src={value.car.photo} alt="" />
                       <div>
                         <p>{value.car.name}</p>
                         <p>{value.car.company}</p>
                         <p>Lorem ipsum dolor sit amet Lorem ipsum 
                         dolor sit amet</p>
                      </div></div>
                      <div style={{display:"block"}}><p>ID:254</p>
                      <p>Date:22.02.12</p>
                      <p>Viewed:135</p>
                      </div>
                      
                       </CarinTab>
                       </div>
                       <hr />
                  </div>  
                   
            )
      })
}
      
       </MiddleReview>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BigSeconddiv>
      <SecondTab>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
</SecondTab>
<SecondMiddle>
  <h2 >Send a question</h2>
  <input id="input3" type="text" placeholder="Your name" />
  <input id="input1" type="text" placeholder="Your email" />
  <textarea placeholder="Your question"/>
  <button><p>Send question</p></button>


  
</SecondMiddle>
</BigSeconddiv>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <BigSeconddiv>
      <SecondTab>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontFamily:'Montserrat',fontSize:'17',
        } }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
</SecondTab>
<SecondMiddle>
  <h2 >Have you got a question</h2>
  <input id="input3" type="text" placeholder="Your name" />
  <input id="input1" type="text" placeholder="Your email" />
  <textarea placeholder="Your question"/>
  <button><p>Send question</p></button>
</SecondMiddle>
</BigSeconddiv>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <BeforeDiv>  <Lasttabdiv>
        <img src={Location} alt="" />
        <div>
          <div>
            <p>Phone number:</p>
            <h4>+7 237 181 181</h4>
            <h4>+7 237 181 181</h4>
          </div>
          <div>
            <p>E-mail:</p>
            <h4>logo.uz</h4>
          </div>
        </div>
          
        </Lasttabdiv>
      <SecondMiddle>
  <h2 >Have you got a question</h2>
  <input id="input3" type="text" placeholder="Your name" />
  <input id="input1" type="text" placeholder="Your email" />
  <textarea placeholder="Your question"/>
  <button><p>Send question</p></button>
</SecondMiddle></BeforeDiv>
      </CustomTabPanel>
    </Box>
  );
}
