import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import RecomendPhoto from '../../assets/recomend1.svg'
// import RecomendPh from '../../assets/recomend2.svg'
// import RecomendPho from '../../assets/recomend3.svg'
// import RecomendPhot from '../../assets/reacomend4.svg'
import { Buttton, Recline, Recomen } from "./caruselstyle";
import { motordata } from "../mock/motor";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Caruselllll = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // Server-side rendering
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={false}
      customTransition="all .3"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-0-px"
    >
      {motordata.map((value, recomend) => {
        return (
          <div key={value.id}>
            <Recomen className="a">
              <img src={value.car.photo} alt="" />
              <p>{value.car.name}</p>
              <br />
              <Buttton>Discover the range</Buttton>
              <Recline>
                <p>Choose a model </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M13.75 4.375L7.5 10.625L1.25 4.375"
                    stroke="#373737"
                    stroke-width="2"
                  />
                </svg>
              </Recline>
            </Recomen>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Caruselllll;
