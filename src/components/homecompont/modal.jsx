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
import { Link,  } from "react-router-dom";
import { Regisdiv } from "../login/loginstyle";

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
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  return (
    <Videosmain>

      
      <p>Videos</p>
      <div>
        <div>
          <Button onClick={handleOpen}>
            <img  src={Video1} alt="" />
          </Button>
          
      
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box  sx={style}>
              <Regisdiv>
              <h2>Perfect Summer Night - Camping with Their Dog</h2>
              <Link style={{ textDecoration: "none" }} to="/homepage">    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72246 4.72254C4.92874 4.51632 5.20848 4.40047 5.50016 4.40047C5.79184 4.40047 6.07157 4.51632 6.27786 4.72254L11.0002 9.44484L15.7225 4.72254C15.8239 4.61747 15.9453 4.53367 16.0795 4.47602C16.2137 4.41837 16.3581 4.38803 16.5041 4.38676C16.6502 4.38549 16.795 4.41332 16.9302 4.46863C17.0654 4.52394 17.1882 4.60562 17.2915 4.7089C17.3948 4.81218 17.4765 4.935 17.5318 5.07019C17.5871 5.20537 17.6149 5.35022 17.6136 5.49628C17.6124 5.64233 17.582 5.78668 17.5244 5.92088C17.4667 6.05508 17.3829 6.17646 17.2779 6.27794L12.5556 11.0002L17.2779 15.7225C17.4782 15.93 17.5891 16.2079 17.5866 16.4963C17.5841 16.7847 17.4684 17.0606 17.2645 17.2645C17.0605 17.4685 16.7846 17.5842 16.4962 17.5867C16.2078 17.5892 15.9299 17.4783 15.7225 17.2779L11.0002 12.5556L6.27786 17.2779C6.07039 17.4783 5.79253 17.5892 5.50411 17.5867C5.2157 17.5842 4.9398 17.4685 4.73586 17.2645C4.53191 17.0606 4.41622 16.7847 4.41371 16.4963C4.41121 16.2079 4.52208 15.93 4.72246 15.7225L9.44476 11.0002L4.72246 6.27794C4.51624 6.07165 4.40039 5.79192 4.40039 5.50024C4.40039 5.20856 4.51624 4.92882 4.72246 4.72254Z" fill="#373737"/>
</svg></Link></Regisdiv>
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
            <img  src={Video2} alt="" />
          </Button>
          
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
            <Regisdiv>
            <h2>Camping in the Rain with a New Camping Truck</h2>
              <Link style={{ textDecoration: "none" }} to="/homepage">    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72246 4.72254C4.92874 4.51632 5.20848 4.40047 5.50016 4.40047C5.79184 4.40047 6.07157 4.51632 6.27786 4.72254L11.0002 9.44484L15.7225 4.72254C15.8239 4.61747 15.9453 4.53367 16.0795 4.47602C16.2137 4.41837 16.3581 4.38803 16.5041 4.38676C16.6502 4.38549 16.795 4.41332 16.9302 4.46863C17.0654 4.52394 17.1882 4.60562 17.2915 4.7089C17.3948 4.81218 17.4765 4.935 17.5318 5.07019C17.5871 5.20537 17.6149 5.35022 17.6136 5.49628C17.6124 5.64233 17.582 5.78668 17.5244 5.92088C17.4667 6.05508 17.3829 6.17646 17.2779 6.27794L12.5556 11.0002L17.2779 15.7225C17.4782 15.93 17.5891 16.2079 17.5866 16.4963C17.5841 16.7847 17.4684 17.0606 17.2645 17.2645C17.0605 17.4685 16.7846 17.5842 16.4962 17.5867C16.2078 17.5892 15.9299 17.4783 15.7225 17.2779L11.0002 12.5556L6.27786 17.2779C6.07039 17.4783 5.79253 17.5892 5.50411 17.5867C5.2157 17.5842 4.9398 17.4685 4.73586 17.2645C4.53191 17.0606 4.41622 16.7847 4.41371 16.4963C4.41121 16.2079 4.52208 15.93 4.72246 15.7225L9.44476 11.0002L4.72246 6.27794C4.51624 6.07165 4.40039 5.79192 4.40039 5.50024C4.40039 5.20856 4.51624 4.92882 4.72246 4.72254Z" fill="#373737"/>
</svg></Link></Regisdiv>
              
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
            <Regisdiv>
            <h2>Overnight in a truck camper in heavy rain</h2>
              <Link style={{ textDecoration: "none" }} to="/homepage">    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72246 4.72254C4.92874 4.51632 5.20848 4.40047 5.50016 4.40047C5.79184 4.40047 6.07157 4.51632 6.27786 4.72254L11.0002 9.44484L15.7225 4.72254C15.8239 4.61747 15.9453 4.53367 16.0795 4.47602C16.2137 4.41837 16.3581 4.38803 16.5041 4.38676C16.6502 4.38549 16.795 4.41332 16.9302 4.46863C17.0654 4.52394 17.1882 4.60562 17.2915 4.7089C17.3948 4.81218 17.4765 4.935 17.5318 5.07019C17.5871 5.20537 17.6149 5.35022 17.6136 5.49628C17.6124 5.64233 17.582 5.78668 17.5244 5.92088C17.4667 6.05508 17.3829 6.17646 17.2779 6.27794L12.5556 11.0002L17.2779 15.7225C17.4782 15.93 17.5891 16.2079 17.5866 16.4963C17.5841 16.7847 17.4684 17.0606 17.2645 17.2645C17.0605 17.4685 16.7846 17.5842 16.4962 17.5867C16.2078 17.5892 15.9299 17.4783 15.7225 17.2779L11.0002 12.5556L6.27786 17.2779C6.07039 17.4783 5.79253 17.5892 5.50411 17.5867C5.2157 17.5842 4.9398 17.4685 4.73586 17.2645C4.53191 17.0606 4.41622 16.7847 4.41371 16.4963C4.41121 16.2079 4.52208 15.93 4.72246 15.7225L9.44476 11.0002L4.72246 6.27794C4.51624 6.07165 4.40039 5.79192 4.40039 5.50024C4.40039 5.20856 4.51624 4.92882 4.72246 4.72254Z" fill="#373737"/>
</svg></Link></Regisdiv>
              
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
            <Regisdiv>
            <h2>Ford Ranger Overland Camper</h2>
              <Link style={{ textDecoration: "none" }} to="/homepage">    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72246 4.72254C4.92874 4.51632 5.20848 4.40047 5.50016 4.40047C5.79184 4.40047 6.07157 4.51632 6.27786 4.72254L11.0002 9.44484L15.7225 4.72254C15.8239 4.61747 15.9453 4.53367 16.0795 4.47602C16.2137 4.41837 16.3581 4.38803 16.5041 4.38676C16.6502 4.38549 16.795 4.41332 16.9302 4.46863C17.0654 4.52394 17.1882 4.60562 17.2915 4.7089C17.3948 4.81218 17.4765 4.935 17.5318 5.07019C17.5871 5.20537 17.6149 5.35022 17.6136 5.49628C17.6124 5.64233 17.582 5.78668 17.5244 5.92088C17.4667 6.05508 17.3829 6.17646 17.2779 6.27794L12.5556 11.0002L17.2779 15.7225C17.4782 15.93 17.5891 16.2079 17.5866 16.4963C17.5841 16.7847 17.4684 17.0606 17.2645 17.2645C17.0605 17.4685 16.7846 17.5842 16.4962 17.5867C16.2078 17.5892 15.9299 17.4783 15.7225 17.2779L11.0002 12.5556L6.27786 17.2779C6.07039 17.4783 5.79253 17.5892 5.50411 17.5867C5.2157 17.5842 4.9398 17.4685 4.73586 17.2645C4.53191 17.0606 4.41622 16.7847 4.41371 16.4963C4.41121 16.2079 4.52208 15.93 4.72246 15.7225L9.44476 11.0002L4.72246 6.27794C4.51624 6.07165 4.40039 5.79192 4.40039 5.50024C4.40039 5.20856 4.51624 4.92882 4.72246 4.72254Z" fill="#373737"/>
</svg></Link></Regisdiv>
              
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
            <Regisdiv>
            <h2>Snow Camping in the Winter Wonderland </h2>
              <Link style={{ textDecoration: "none" }} to="/homepage">    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72246 4.72254C4.92874 4.51632 5.20848 4.40047 5.50016 4.40047C5.79184 4.40047 6.07157 4.51632 6.27786 4.72254L11.0002 9.44484L15.7225 4.72254C15.8239 4.61747 15.9453 4.53367 16.0795 4.47602C16.2137 4.41837 16.3581 4.38803 16.5041 4.38676C16.6502 4.38549 16.795 4.41332 16.9302 4.46863C17.0654 4.52394 17.1882 4.60562 17.2915 4.7089C17.3948 4.81218 17.4765 4.935 17.5318 5.07019C17.5871 5.20537 17.6149 5.35022 17.6136 5.49628C17.6124 5.64233 17.582 5.78668 17.5244 5.92088C17.4667 6.05508 17.3829 6.17646 17.2779 6.27794L12.5556 11.0002L17.2779 15.7225C17.4782 15.93 17.5891 16.2079 17.5866 16.4963C17.5841 16.7847 17.4684 17.0606 17.2645 17.2645C17.0605 17.4685 16.7846 17.5842 16.4962 17.5867C16.2078 17.5892 15.9299 17.4783 15.7225 17.2779L11.0002 12.5556L6.27786 17.2779C6.07039 17.4783 5.79253 17.5892 5.50411 17.5867C5.2157 17.5842 4.9398 17.4685 4.73586 17.2645C4.53191 17.0606 4.41622 16.7847 4.41371 16.4963C4.41121 16.2079 4.52208 15.93 4.72246 15.7225L9.44476 11.0002L4.72246 6.27794C4.51624 6.07165 4.40039 5.79192 4.40039 5.50024C4.40039 5.20856 4.51624 4.92882 4.72246 4.72254Z" fill="#373737"/>
</svg></Link></Regisdiv>
              
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
            <Regisdiv>
            <h2>This CAR TENT is perfect for RAIN and STORM</h2>
              <Link style={{ textDecoration: "none" }} to="/homepage">    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72246 4.72254C4.92874 4.51632 5.20848 4.40047 5.50016 4.40047C5.79184 4.40047 6.07157 4.51632 6.27786 4.72254L11.0002 9.44484L15.7225 4.72254C15.8239 4.61747 15.9453 4.53367 16.0795 4.47602C16.2137 4.41837 16.3581 4.38803 16.5041 4.38676C16.6502 4.38549 16.795 4.41332 16.9302 4.46863C17.0654 4.52394 17.1882 4.60562 17.2915 4.7089C17.3948 4.81218 17.4765 4.935 17.5318 5.07019C17.5871 5.20537 17.6149 5.35022 17.6136 5.49628C17.6124 5.64233 17.582 5.78668 17.5244 5.92088C17.4667 6.05508 17.3829 6.17646 17.2779 6.27794L12.5556 11.0002L17.2779 15.7225C17.4782 15.93 17.5891 16.2079 17.5866 16.4963C17.5841 16.7847 17.4684 17.0606 17.2645 17.2645C17.0605 17.4685 16.7846 17.5842 16.4962 17.5867C16.2078 17.5892 15.9299 17.4783 15.7225 17.2779L11.0002 12.5556L6.27786 17.2779C6.07039 17.4783 5.79253 17.5892 5.50411 17.5867C5.2157 17.5842 4.9398 17.4685 4.73586 17.2645C4.53191 17.0606 4.41622 16.7847 4.41371 16.4963C4.41121 16.2079 4.52208 15.93 4.72246 15.7225L9.44476 11.0002L4.72246 6.27794C4.51624 6.07165 4.40039 5.79192 4.40039 5.50024C4.40039 5.20856 4.51624 4.92882 4.72246 4.72254Z" fill="#373737"/>
</svg></Link></Regisdiv>
              
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
            <Regisdiv>
            <h2>Solo Camping in Snowstorm with AURA Wood Fire </h2>
              <Link style={{ textDecoration: "none" }} to="/homepage">    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72246 4.72254C4.92874 4.51632 5.20848 4.40047 5.50016 4.40047C5.79184 4.40047 6.07157 4.51632 6.27786 4.72254L11.0002 9.44484L15.7225 4.72254C15.8239 4.61747 15.9453 4.53367 16.0795 4.47602C16.2137 4.41837 16.3581 4.38803 16.5041 4.38676C16.6502 4.38549 16.795 4.41332 16.9302 4.46863C17.0654 4.52394 17.1882 4.60562 17.2915 4.7089C17.3948 4.81218 17.4765 4.935 17.5318 5.07019C17.5871 5.20537 17.6149 5.35022 17.6136 5.49628C17.6124 5.64233 17.582 5.78668 17.5244 5.92088C17.4667 6.05508 17.3829 6.17646 17.2779 6.27794L12.5556 11.0002L17.2779 15.7225C17.4782 15.93 17.5891 16.2079 17.5866 16.4963C17.5841 16.7847 17.4684 17.0606 17.2645 17.2645C17.0605 17.4685 16.7846 17.5842 16.4962 17.5867C16.2078 17.5892 15.9299 17.4783 15.7225 17.2779L11.0002 12.5556L6.27786 17.2779C6.07039 17.4783 5.79253 17.5892 5.50411 17.5867C5.2157 17.5842 4.9398 17.4685 4.73586 17.2645C4.53191 17.0606 4.41622 16.7847 4.41371 16.4963C4.41121 16.2079 4.52208 15.93 4.72246 15.7225L9.44476 11.0002L4.72246 6.27794C4.51624 6.07165 4.40039 5.79192 4.40039 5.50024C4.40039 5.20856 4.51624 4.92882 4.72246 4.72254Z" fill="#373737"/>
</svg></Link></Regisdiv>
             
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
            <Regisdiv>
            <h2>CAMPING WITH A CAMPER TRUCK WITH STOVE IN HEAVY SNOW</h2>
              <Link style={{ textDecoration: "none" }} to="/homepage">    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72246 4.72254C4.92874 4.51632 5.20848 4.40047 5.50016 4.40047C5.79184 4.40047 6.07157 4.51632 6.27786 4.72254L11.0002 9.44484L15.7225 4.72254C15.8239 4.61747 15.9453 4.53367 16.0795 4.47602C16.2137 4.41837 16.3581 4.38803 16.5041 4.38676C16.6502 4.38549 16.795 4.41332 16.9302 4.46863C17.0654 4.52394 17.1882 4.60562 17.2915 4.7089C17.3948 4.81218 17.4765 4.935 17.5318 5.07019C17.5871 5.20537 17.6149 5.35022 17.6136 5.49628C17.6124 5.64233 17.582 5.78668 17.5244 5.92088C17.4667 6.05508 17.3829 6.17646 17.2779 6.27794L12.5556 11.0002L17.2779 15.7225C17.4782 15.93 17.5891 16.2079 17.5866 16.4963C17.5841 16.7847 17.4684 17.0606 17.2645 17.2645C17.0605 17.4685 16.7846 17.5842 16.4962 17.5867C16.2078 17.5892 15.9299 17.4783 15.7225 17.2779L11.0002 12.5556L6.27786 17.2779C6.07039 17.4783 5.79253 17.5892 5.50411 17.5867C5.2157 17.5842 4.9398 17.4685 4.73586 17.2645C4.53191 17.0606 4.41622 16.7847 4.41371 16.4963C4.41121 16.2079 4.52208 15.93 4.72246 15.7225L9.44476 11.0002L4.72246 6.27794C4.51624 6.07165 4.40039 5.79192 4.40039 5.50024C4.40039 5.20856 4.51624 4.92882 4.72246 4.72254Z" fill="#373737"/>
</svg></Link></Regisdiv>
             
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
