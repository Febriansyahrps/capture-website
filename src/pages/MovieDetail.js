import styled from "styled-components";
import { useState, useEffect } from "react";
import { MovieState } from "../movieState";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useLocation();
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter(
      (state) => state.url === history.pathname
    );
    if (currentMovie[0]) setMovie(currentMovie[0]);
  }, [movies, history.pathname]);
  return (
    <>
      {movie && (
        <Detail
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h1>{movie.title}</h1>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award key={award.title}>
                <h3>{award.title}</h3>
                <div className="line"></div>
                <p>{award.description}</p>
              </Award>
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </Detail>
      )}
    </>
  );
};
const Detail = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h1 {
    text-align: center;
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translate(-50%);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  margin: 2rem 5rem;
  justify-content: space-around;
  @media screen and (max-width: 900px) {
    margin: 2rem 2rem;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Award = styled.div`
  padding: 2rem;
  .line {
    width: 100%;
    background: #23d997;
    height: 0.4rem;
    margin: 1rem 0;
  }
  @media screen and (max-width: 900px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 650px) {
    padding: 1.5rem 0;
  }
`;
const ImageDisplay = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MovieDetail;
