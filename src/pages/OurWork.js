import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MovieState } from "../movieState";
import { motion } from "framer-motion/dist/framer-motion";
import {
  fade,
  lineAnim,
  pageAnimation,
  photoAnim,
  slider,
  sliderContainer,
} from "../animation";

const OurWork = () => {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState(MovieState);
  return (
    <Work
      style={{ background: "#FFF" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      {movies.map((movie) => (
        <Movie key={movie.title}>
          <motion.h2 variants={fade}>{movie.title}</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to={movie.url}>
            <Image>
              <motion.img
                variants={photoAnim}
                src={movie.mainImg}
                alt={movie.title}
              />
            </Image>
          </Link>
        </Movie>
      ))}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 3rem 5rem;
  h2 {
    padding: 1rem 0;
  }
  @media screen and (max-width: 900px) {
    padding: 3rem 3rem;
  }
  @media screen and (max-width: 650px) {
    padding: 2rem 2rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 5rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 650px) {
    padding-bottom: 3rem;
    .line {
      margin-bottom: 2rem;
    }
    img {
      height: 300px;
    }
  }
`;
const Image = styled.div`
  overflow: hidden;
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
