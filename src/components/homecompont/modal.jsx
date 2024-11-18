import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import Video1 from "../../assets/video1.svg";
import Video2 from "../../assets/video2.svg";
import Video3 from "../../assets/video3.svg";
import Video4 from "../../assets/video4.svg";
import Video5 from "../../assets/video5.svg";
import Video6 from "../../assets/home-box-6.png";
import Video7 from "../../assets/home-box-7.png";
import Video8 from "../../assets/home-box-8.png";
import { Videosmain } from "../homestyle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
 
  width: 830,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius:5
  
};

  

const Modalcomponet = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);
  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);
  const [open6, setOpen6] = React.useState(false);
  const handleOpen6 = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);
  const [open7, setOpen7] = React.useState(false);
  const handleOpen7 = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);
  return (
    <Videosmain>
      <p>Videos</p>
      <div>
        <div>
          <Button onClick={handleOpen}>
            <img src={Video1} alt="" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box  sx={style}>
              <h2>Perfect Summer Night - Camping with Their Dog</h2>
              <br />
              <iframe
                width="830"
                height="460"
                src="https://www.youtube.com/embed/H3-WgbebuX4?si=t_jQg63T1uJ7fh9y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>
          </Modal>
        </div>

        <div>
          <Button onClick={handleOpen1}>
            <img src={Video2} alt="" />
          </Button>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2>Camping in the Rain with a New Camping Truck</h2>
              <br />
              <iframe
                width="830"
                height="460"
                src="https://www.youtube.com/embed/ynDO-Tpb5cY?si=N6CeAqiFeEWeqnxJ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>
          </Modal>
        </div>

        <div>
          <Button onClick={handleOpen2}>
            <img src={Video3} alt="" />
          </Button>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2>Overnight in a truck camper in heavy rain</h2>
              <br />
              <iframe
                width="830"
                height="460"
                src="https://www.youtube.com/embed/0ZgizY-9jOc?si=yMjVQByA1pUwUe_1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>
          </Modal>
        </div>

        <div>
          <Button onClick={handleOpen3}>
            <img src={Video4} alt="" />
          </Button>
          <Modal
            open={open3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2>Ford Ranger Overland Camper</h2>
              <br />
              <iframe
                width="830"
                height="460"
                src="https://www.youtube.com/embed/gwNJyhAWXD8?si=UqZlLhvhVj3rxwaM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>
          </Modal>
        </div>
        <div>
          <Button onClick={handleOpen4}>
            <img src={Video5} alt="" />
          </Button>
          <Modal
            open={open4}
            onClose={handleClose4}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2>Snow Camping in the Winter Wonderland </h2>
              <br />
              <iframe
                width="830"
                height="460"
                src="https://www.youtube.com/embed/4cRIRW-U-y4?si=g4V9TiOFuC2jtAN4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>{" "}
            </Box>
          </Modal>
        </div>
        <div>
          <Button onClick={handleOpen5}>
            <img src={Video6} alt="" />
          </Button>
          <Modal
            open={open5}
            onClose={handleClose5}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2>This CAR TENT is perfect for RAIN and STORM</h2>
              <br />
              <iframe
                width="830"
                height="460"
                src="https://www.youtube.com/embed/wqhvVRPpels?si=laeqtvuyJijnycpM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>{" "}
            </Box>
          </Modal>
        </div>
        <div>
          <Button onClick={handleOpen6}>
            <img src={Video7} alt="" />
          </Button>
          <Modal
            open={open6}
            onClose={handleClose6}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2>Solo Camping in Snowstorm with AURA Wood Fire </h2>
              <br />
              <iframe
                width="830"
                height="460"
                src="https://www.youtube.com/embed/6WzYKP13zvU?si=S8-XQE_pm1afyn4I"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>
          </Modal>
        </div>
        <div>
          <Button onClick={handleOpen7}>
            <img src={Video8} alt="" />
          </Button>
          <Modal
            open={open7}
            onClose={handleClose7}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2>CAMPING WITH A CAMPER TRUCK WITH STOVE IN HEAVY SNOW</h2>{" "}
              <br />
              <iframe
                width="830"
                height="460"
                src="https://www.youtube.com/embed/gYn6_ls662Q?si=Df_z6RuavbCS-gw4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>
          </Modal>
        </div>
      </div>
    </Videosmain>
  );
};

export default Modalcomponet;
