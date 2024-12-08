import React, { useState } from "react";
import { Backmenu } from "./homestyle";

import {
  Bigdiv,
  Button,
  Buttond,
  Buttonsecond,
  Compare,
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

import { Homecop } from "./usedcarstyle";
import UsedcomponentV from "./usedcar/vmenu";
import UsedcomponentH from "./usedcar/Hmenu";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Motorssearch from './motors/mui'
import Checkbox from "@mui/material/Checkbox";

import Accordion from "@mui/material/Accordion";
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CenterFocusStrong } from "@mui/icons-material";

const Usedcarcomponent = () => {
  const [searchData, setsearchData] = useState("");

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [active, setActive] = useState(true);
  function HandleCube() {
    setActive(true);
  }

  function Handleline() {
    setActive(false);
  }
  return (
    <div>
      <Homecop>
        <Backmenu>
          <h6>Home / Used Car</h6>
          <h4>Our ranges</h4>
          <h1>Used Car</h1>
        </Backmenu>
      </Homecop>
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
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Aidal</label>
                </div>
                <br />
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Knal</label>
                </div>
                <br />
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Escape</label>
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
                  <label for="">escape</label>
                </div>
                <br />
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Aidal</label>
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
              <h4>License type</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Stright>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">1 year</label>
                </div>
                <br />
                <div>
                  <Checkbox {...label} />
                  <label for="">2 year</label>
                </div>
                <br />
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">1.5year</label>
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
              <h4>Number of travelers</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Stright>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">2</label>
                </div>
                <br />
                <div>
                  <Checkbox {...label} />
                  <label for="">3-4</label>
                </div>
                <br />
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">5+</label>
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
              <h4>Location</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Stright>
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Seoul</label>
                </div>
                <br />
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Korea</label>
                </div>
                <br />
                <div>
                  {" "}
                  <Checkbox {...label} />
                  <label for="">Pusan</label>
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
                Item <span> 25.156</span>
              </p>
              <input
                type="text"
                placeholder="you can find your camping car"
                value={searchData}
                onChange={(e) => setsearchData(e.target.value)}
              />
            </Leftnavbar>
            <Rightnavbar>
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
            <UsedcomponentH searchData={searchData} />
          ) : (
            <UsedcomponentV searchData={searchData} />
          )}
        </Rightdiv>
      </Bigdiv>
    </div>
  );
};

export default Usedcarcomponent;
