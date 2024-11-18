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

import CamperCaravans from "./caravan /mui";
import { Accordion } from "@mui/material";
import Caravancomp from "./caravan /vmenu2";

const Caravancomponents = () => {
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
          <Accordion>
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
          <Accordion>
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
          <Accordion>
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
          <Accordion>
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
          <Accordion>
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
            </Leftnavbar>
            <Rightnavbar>
              <Fisrtsearch>
                <p>Sort by</p>
              </Fisrtsearch>
              <CamperCaravans />
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
                    <MenuItem value={10}>50</MenuItem>
                    <MenuItem value={20}>60</MenuItem>
                    <MenuItem value={30}>70</MenuItem>
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
          {active ? <Hcaravancomponent /> : <Caravancomp />}
        </Rightdiv>
      </Bigdiv>
    </div>
  );
};

export default Caravancomponents;
