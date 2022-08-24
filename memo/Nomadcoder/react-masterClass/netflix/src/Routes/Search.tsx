import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IGetSearchResult, searchAnything, searchItem } from "../api";

const Grid = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100vw;
  gap: 10px;
`;

const Box = styled.div`
  background-color: red;
  width: 100%;
  height: 230px;
`;

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
        <Box>
          {search.name}
          <>{search.id}</>
        </Box>
      ))}
    </Grid>
  );
}

export default Search;
