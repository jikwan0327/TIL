import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IGetSearchResult, searchAnything } from "../api";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";

const Grid = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100vw;
  gap: 10px;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-color: black;
  width: 100%;
  height: 230px;
  background-size: cover;
  background-position: center center;
`;

const BoxVarients = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    duration: 0.3,
  },
  exit: {
    transition: { delay: 0.5, type: "tween", duration: 0.1 },
  },
};

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);
  const { isLoading: resultLoading, data: resultData } = useQuery<IGetSearchResult>(["search", "keywords"], () =>
    searchAnything(keyword + "")
  );
  const Id = resultData?.results;
  console.log(Id);
  return (
    <Grid>
      {resultData?.results.map((search) => (
        <Box
          variants={BoxVarients}
          initial="initial"
          whileHover="hover"
          key={search.id}
          bgPhoto={makeImagePath(search.backdrop_path, "w500")}
        >
          {search.name}
        </Box>
      ))}
    </Grid>
  );
}

export default Search;
