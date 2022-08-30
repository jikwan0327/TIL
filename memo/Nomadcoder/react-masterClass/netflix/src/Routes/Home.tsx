import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { getMovies, getPopularMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const Wrapper = styled.div`
  background: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 10px;
`;

const OverView = styled.p`
  width: 50%;
  font-size: 30px;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  font-size: 66px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: right center;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;

const BIgTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 10px;
  font-size: 46px;
  position: relative;
  top: -60px;
`;

const BigOverView = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.white.lighter};
`;

const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.lighter};
`;

const Category = styled.h1`
  font-size: 40px;
  color: white;
  font-weight: 500;
  position: absolute;
  top: -50px;
`;

const rowVarients = {
  hidden: {
    x: window.innerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 5,
  },
};

const offset = 6;

const infoVarients = {
  hover: {
    opacity: 1,
    transition: { delay: 0.5, type: "tween", duration: 0.1 },
  },
};

const boxVarients = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    duration: 0.3,
    y: -80,
    transition: { delay: 0.5, type: "tween", duration: 0.1 },
  },
};

function Home() {
  const history = useHistory();
  const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
  const { scrollY } = useViewportScroll();
  const { isLoading: nowLoading, data: nowplaying } = useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getMovies);
  const { isLoading: popularLoading, data: popular } = useQuery<IGetMoviesResult>(
    ["movies", "popular"],
    getPopularMovies
  );
  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    if (nowplaying) {
      if (leaving) return;
      toggleLeaving();
      const total = nowplaying?.results.length - 1;
      const maxIndex = Math.floor(total / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    history.push(`/movies/${movieId}`);
  };
  const onOverlayClick = () => {
    history.push("/");
  };
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    nowplaying?.results.find((movie) => movie.id + "" === bigMovieMatch.params.movieId);
  console.log(clickedMovie);
  return (
    <Wrapper>
      {nowLoading && popularLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner onClick={increaseIndex} bgPhoto={makeImagePath(nowplaying?.results[0].backdrop_path || "")}>
            <Title>{nowplaying?.results[0].title}</Title>
            <OverView>{nowplaying?.results[0].overview}</OverView>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Category>Now playing</Category>
              <Row
                variants={rowVarients}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {nowplaying?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + " "}
                      transition={{ type: "tween" }}
                      variants={boxVarients}
                      initial="normal"
                      whileHover="hover"  
                      onClick={() => onBoxClicked(movie.id)}
                      key={movie.id}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    >
                      <Info variants={infoVarients}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
              <Category style={{ top: 250 }}>Popular</Category>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <Overlay onClick={onOverlayClick} exit={{ opacity: 0 }} animate={{ opacity: 1 }} />
                <BigMovie style={{ top: scrollY.get() + 100 }} layoutId={bigMovieMatch.params.movieId}>
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top,  black,transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <BIgTitle>{clickedMovie.title}</BIgTitle>
                      <BigOverView>{clickedMovie.overview}</BigOverView>
                    </>
                  )}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
