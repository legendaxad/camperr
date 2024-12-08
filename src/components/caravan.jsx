import React, { useState } from "react";
import { Backmenu, Home } from "./homestyle";
import {
  Bigdiv,
  Button,
  Buttond,
  Buttonsecond,
  Compare,
  Fisrtsearch,
  Foursearch,
  Leftdiv,
  Leftnavbar,
  Navtable,
  Price,
  Rightb,
  Rightdiv,
  Rightnavbar,
  Stright,
  Table,
} from "./motors";
import first from "../assets/first.svg";
import second from "../assets/first.svg";
import third from "../assets/first.svg";

import cubes from "../assets/clarity_grid-view-solid.svg";
import lineone from "../assets/ic_round-view-list.svg";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import { CenterFocusStrong } from "@mui/icons-material";

import Hcaravancomponent from "./caravan /Hmenu";

import { Accordion } from "@mui/material";
import Caravancomp from "./caravan /vmenu2";

const Caravancompon = () => {
  const [searchData, setsearchData] = useState("");
  const [active, setActive] = useState(true);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  function HandleCube() {
    setActive(true);
  }

  function Handleline() {
    setActive(false);
  }
  return (
    <div>
      <Home>
        <Backmenu>
          <h6>Home / Caravan</h6>
          <h4>Our ranges</h4>
          <h1>Caravan</h1>
        </Backmenu>
      </Home>
      <Bigdiv>
        <Leftdiv>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              disableGutters="true"
            >
              <h4>Cost of car</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Table>
                  <div>
                    <p>from</p>
                    <Price type="text" />
                  </div>
                  <div>
                    <p>to</p>
                    <Price type="text" />
                  </div>
                </Table>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h4>Brand</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Stright className="axax">
                <div>
                  
                  <Checkbox {...label} />
                  <label for="">Luxury Caravan</label>
                </div>
                
                <div>
                
                  <Checkbox {...label} />
                  <label for="">Eco-Friendly Caravan</label>
                </div>
                
                <div>
                  
                  <Checkbox {...label} />
                  <label for="">Compact Caravan</label>
                </div>
                <div>
                  
                  <Checkbox {...label} />
                  <label for="">Mini Camper</label>
                </div>
                <div>
                  
                  <Checkbox {...label} />
                  <label for="">High-End Off-Road Caravan</label>
                </div>
               
                <br />
              </Stright>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h4>Company</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Stright>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Green Campers</label>
                </div>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Nomad Ventures</label>
                </div>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Adventure Co</label>
                </div>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Home on Wheels</label>
                </div>
                
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Compact Rides</label>
                </div>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Rugged Rides</label>
                </div>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Quick Getaways </label>
                </div>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for=""> Sustainable Rides </label>
                </div>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for=""> City Caravan Co </label>
                </div>
            
              </Stright>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h4>License type</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Stright>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">1종 보통</label>
                </div>
                
                <div>
                  <Checkbox {...label} />
                  <label for="">2종 보통</label>
                </div>
                
               
              </Stright>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h4>Number of travelers</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Stright>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">3인</label>
                </div>
                
                <div>
                  <Checkbox {...label} />
                  <label for="">4인</label>
                </div>
                
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">5인</label>
                </div>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">6+인</label>
                </div>
                
              </Stright>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h4>Location</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Stright>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">서울 </label>
                </div>
              
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">부산</label>
                </div>
                
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">광주 </label>
                </div>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">전국  </label>
                </div>
                <br />
              </Stright>
            </AccordionDetails>
          </Accordion>{" "}
          <br />
          <br />
          <Buttond>
            <Buttonsecond>Cancel</Buttonsecond>
            <Button>Search</Button>
          </Buttond>
          <Compare>
            <h3>Compare</h3>
            <div>
              <img src={first} alt="" />
              <img src={second} alt="" />
              <img src={third} alt="" />
            </div>
          </Compare>
          <Rightb>Compare</Rightb>
        </Leftdiv>
        <Rightdiv>
          <Navtable>
            <Leftnavbar>
              <p>
                Item <span>25,156</span>
              </p>
              <input
                type="text"
                s
                value={searchData}
                onChange={(e) => setsearchData(e.target.value)}
                placeholder="you can find your camping car"
              />
            </Leftnavbar>
            <Rightnavbar>
              <Fisrtsearch></Fisrtsearch>

              <Box sx={{ minWidth: 100 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    size="small"
                    tabIndex={CenterFocusStrong}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Foursearch>
                <div
                  style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  }}
                >
                  <img onClick={HandleCube} src={cubes} alt="" />
                </div>
                <div>
                  <img onClick={Handleline} src={lineone} alt="" />
                </div>
              </Foursearch>
            </Rightnavbar>
          </Navtable>
          {active ? (
            <Hcaravancomponent searchData={searchData} />
          ) : (
            <Caravancomp searchData={searchData} />
          )}
        </Rightdiv>
      </Bigdiv>
    </div>
  );
};

export default Caravancompon;
