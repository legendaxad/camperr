import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Recline } from './homestyle';
import RecomendPhoto from '../assets/recomend1.svg'
const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
  };
  const size = 15;
const Caruselllll = () => {
  return (
      <Carousel
      
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // Server-side rendering
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
       
    </Carousel>
  )
}

export default Caruselllll