import styled from "styled-components";
import { fade } from "../animation";
import clock from "../img/clock.svg";
import home2 from "../img/home2.png";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion/dist/framer-motion";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services variants={fade} animate={controls} initial="hide" ref={element}>
      <Description>
        <h1>
          High <span>Quality</span> Service
        </h1>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h4>Efficient</h4>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h4>Efficient</h4>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h4>Efficient</h4>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h4>Efficient</h4>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

export const Services = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem;
  color: white;
  h1 {
    padding-bottom: 5rem;
  }
  p {
    padding: 2rem 0rem 4rem 0rem;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 3rem;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    padding: 2rem;
    h1 {
      padding-bottom: 3rem;
    }
    p {
      padding: 1rem 0rem 3rem 0rem;
    }
  }
`;
export const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 2rem;
  h1 {
    font-weight: lighter;
  }
  @media screen and (max-width: 900px) {
    padding-right: 0;
    h1 {
      text-align: center;
    }
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 550px;
    object-fit: cover;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    img {
      height: 400px;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h4 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 0.75rem;
    }
  }
  @media screen and (max-width: 1200px) {
    flex-basis: 11rem;
  }
`;

export default ServicesSection;
