import React, { useState } from "react";
import { Backmenu } from "./homestyle";
import {
  Bigdiv,
  Button,
  Buttond,
  Buttonsecond,
  Compare,
  Fisrtsearch,
  Foursearch,
  Homecop,
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
import Hmenucomponent from "./motors/Hmenu";
import Vmenucomponent from "./motors/vmenu";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Motor = () => {
  // const [checkedData,setcheckedData]=useState([])
const [searchData,setsearchData]=useState('')
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [age, setAge] = useState("");
  const [active, setActive] = useState(true);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const HandleCube = () => setActive(true);
  const Handleline = () => setActive(false);

  return (
    <>
      <div>
        <Homecop>
          <Backmenu>
            <h6>Home / Motors</h6>
            <h4>Our ranges</h4>
            <h1>Motors</h1>
          </Backmenu>
        </Homecop>
        <Bigdiv>
          <Leftdiv>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                disableGutters={true}
              >
                <h4>Cost of car</h4>
              </AccordionSummary>
              <AccordionDetails>
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
                <Stright>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">Aidal</label>
                  </div>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">Knal</label>
                  </div>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">Escape</label>
                  </div>
                </Stright>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <h4>Company</h4>
              </AccordionSummary>
              <AccordionDetails>
                <Stright>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">Escape</label>
                  </div>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">Aidal</label>
                  </div>
                </Stright>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4-content"
                id="panel4-header"
              >
                <h4>License type</h4>
              </AccordionSummary>
              <AccordionDetails>
                <Stright>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">1 year</label>
                  </div>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">2 year</label>
                  </div>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">1.5 year</label>
                  </div>
                </Stright>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5-content"
                id="panel5-header"
              >
                <h4>Number of travelers</h4>
              </AccordionSummary>
              <AccordionDetails>
                <Stright>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">2</label>
                  </div>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">3-4</label>
                  </div>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">5+</label>
                  </div>
                </Stright>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6-content"
                id="panel6-header"
              >
                <h4>Location</h4>
              </AccordionSummary>
              <AccordionDetails>
                <Stright>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">Seoul</label>
                  </div>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">Korea</label>
                  </div>
                  <div>
                    <Checkbox {...label} />
                    <label htmlFor="">Pusan</label>
                  </div>
                </Stright>
              </AccordionDetails>
            </Accordion>
            <Buttond>
              <Buttonsecond>Cancel</Buttonsecond>
              <Button>Search</Button>
            </Buttond>
            <Compare>
              <h3>Compare</h3>
              <div>
                <img src={first} alt="Car 1" />
                <img src={second} alt="Car 2" />
                <img src={third} alt="Car 3" />
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
                  type="text"s
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
                    <img onClick={HandleCube} src={cubes} alt="Grid View" />
                  </div>
                  <div>
                    <img onClick={Handleline} src={lineone} alt="List View" />
                  </div>
                </Foursearch>
              </Rightnavbar>
            </Navtable>
            {active ? (
              <Hmenucomponent searchData={searchData}  />
            ) : (
              <Vmenucomponent searchData={searchData} />
            )}
          </Rightdiv>
        </Bigdiv>
      </div>
    </>
  );
};

export default Motor;
